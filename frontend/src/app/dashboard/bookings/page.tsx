"use client";

import {
  BookingStatus,
  isValidBookingStatus,
  isValidSort,
  SortStatus,
  Booking, // Import tipe Booking dari transactions
  Meta, // Import tipe Meta dari transactions
  Filters, // Import tipe Filters dari transactions
} from "@/types/transactions/transactions";
import { BookingsClient } from "@/components/dashboard/BookingsClientPage";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import axios from "axios";

// ------------------------------------------------------------------
// 1. DEFINISI TIPE DAN FUNGSI FETCH CLIENT-SIDE
// ------------------------------------------------------------------

// Tipe respons untuk data booking yang sesuai dengan tipe Booking dan Meta Anda
interface BookingApiResponse {
  data: Booking[];
  meta: Meta;
}

// Tipe respons minimal untuk endpoint /auth/me
interface UserDataResponse {
  role: "user" | "tenant";
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Menggantikan getCurrentUser
const fetchMe = async (): Promise<UserDataResponse | null> => {
  try {
    // Menggunakan axios di browser, cookie akan dikirim otomatis
    const response = await axios.get(`${BASE_URL}/user/me`, {
      withCredentials: true,
    });
    // Asumsi data user ada di response.data.data
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Menggantikan fetchUserBookings/fetchTenantBookings
const fetchBookingsClient = async (
  role: string,
  queryParams: URLSearchParams
): Promise<BookingApiResponse> => {
  const endpoint =
    role === "tenant"
      ? `${BASE_URL}/payment/orders/tenant`
      : `${BASE_URL}/reservations/get`;

  const response = await axios.get<{ data: BookingApiResponse }>(endpoint, {
    params: queryParams,
    // KUNCI: Memastikan cookie JWT dikirim dari browser
    withCredentials: true,
  });

  // Asumsi API mengembalikan { data: { data: bookings, meta: meta } }
  return response.data.data;
};

// ------------------------------------------------------------------
// 2. KOMPONEN UTAMA BookingsPage
// ------------------------------------------------------------------

export default function BookingsPage() {
  const urlSearchParams = useSearchParams();

  // --- A. Mengambil Role (Auth Status) ---
  const { data: userData, isLoading: isUserLoading } =
    useQuery<UserDataResponse | null>({
      queryKey: ["me"],
      queryFn: fetchMe,
      retry: false,
    });

  const role = userData?.role || "user";
  const validRole = role === "tenant" ? "tenant" : "user";
  const userIsAuthenticated = !!userData;

  // --- B. Parsing Filter dan Query Params ---
  const filters: Filters = useMemo(() => {
    // Mengambil nilai dari URLSearchParams
    const status = urlSearchParams.get("status");
    const sort = urlSearchParams.get("sort");
    const page = urlSearchParams.get("page");
    const bookingId = urlSearchParams.get("bookingId");

    // Logika filters yang sama dengan Server Component asli
    return {
      status: isValidBookingStatus(status)
        ? (status as BookingStatus)
        : "waiting_confirmation",
      sort: isValidSort(sort) ? (sort as SortStatus) : "asc",
      page: page || "1",
      bookingId: bookingId || "",
    };
    // Menggunakan assertion ke tipe Filters untuk konsistensi
  }, [urlSearchParams]) as Filters;

  const queryParams = useMemo(() => {
    // Solusi aman: Menggunakan index signature untuk URLSearchParams
    return new URLSearchParams(filters as Record<string, string>);
  }, [filters]);

  const queryString = queryParams.toString();

  // --- C. Mengambil Data Booking ---
  const {
    data: bookingData,
    isLoading: isBookingLoading,
    isError: isBookingError,
  } = useQuery<BookingApiResponse>({
    queryKey: ["bookings", validRole, queryString],
    queryFn: () => fetchBookingsClient(validRole, queryParams),
    // Fetch hanya jika user sudah terotentikasi
    enabled: userIsAuthenticated && !isUserLoading,
  });

  // ------------------------------------------------------------------
  // D. Loading dan Error State
  // ------------------------------------------------------------------

  // Menggantikan blok 'if (!user)'
  if (isUserLoading || !userIsAuthenticated) {
    return (
      <div className="p-6 text-red-500">
        {isUserLoading
          ? "Checking authentication..."
          : "Failed to load bookings. Please try logging in again or refresh the page."}
      </div>
    );
  }

  // Status Fetch Booking
  if (isBookingLoading) {
    return <div className="p-6">Loading bookings...</div>;
  }

  if (isBookingError || !bookingData) {
    console.error("Booking data fetch failed:", isBookingError);
    return (
      <div className="p-6 text-red-500">
        Failed to load bookings. Please try logging in again or refresh the
        page.
      </div>
    );
  }

  // Destructuring data dengan tipe yang benar
  const { data: bookings, meta } = bookingData;

  return (
    <BookingsClient
      bookings={bookings}
      meta={meta}
      filters={filters}
      role={validRole}
    />
  );
}
