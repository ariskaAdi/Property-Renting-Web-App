import {
  BookingStatus,
  isValidBookingStatus,
  isValidSort,
  SortStatus,
} from "@/types/transactions/transactions";
import { getCurrentUser } from "@/lib/cookie-auth";
import { BookingsClient } from "@/components/dashboard/BookingsClientPage";
import { cookies } from "next/headers";
import axios from "axios";

type SearchParams = { [key: string]: string | string[] | undefined };

type BookingsPageProps = {
  searchParams: Promise<SearchParams>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchUserBookings = async (searchParams: URLSearchParams) => {
  const endpoint = `${BASE_URL}/reservations/get`;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("Authentication token not found.");
  }
  const response = await axios.get(endpoint, {
    params: searchParams,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

const fetchTenantBookings = async (searchParams: URLSearchParams) => {
  const endpoint = `${BASE_URL}/payment/orders/tenant`;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("Authentication token not found for tenant fetch.");
  }
  const response = await axios.get(endpoint, {
    params: searchParams,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export default async function BookingsPage({
  searchParams,
}: BookingsPageProps) {
  let user = null;
  const sp = await searchParams;
  try {
    user = await getCurrentUser();
  } catch (error) {
    console.error("Authentication check failed:", error);
  }

  const { role } = user || {};
  console.log("role is:", role);

  const status = Array.isArray(sp.status) ? sp.status[0] : sp.status;
  const sort = Array.isArray(sp.sort) ? sp.sort[0] : sp.sort;
  const page = Array.isArray(sp.page) ? sp.page[0] : sp.page;
  const bookingId = Array.isArray(sp.bookingId)
    ? sp.bookingId[0]
    : sp.bookingId;

  const filters = {
    status: isValidBookingStatus(status)
      ? (status as BookingStatus)
      : "waiting_confirmation",
    sort: isValidSort(sort) ? (sort as SortStatus) : "asc",
    page: page || "1",
    bookingId: (bookingId as string) || "",
  };

  console.log("filters are: ", filters);
  const queryParams = new URLSearchParams(filters);

  let bookings;
  let meta;

  const validRole = role === "tenant" ? "tenant" : "user";
  if (!user) {
    return (
      <div className="p-6 text-red-500">
        Failed to load bookings. Please try logging in again or refresh the
        page.
      </div>
    );
  }
  try {
    if (validRole === "tenant") {
      ({ data: bookings, meta } = await fetchTenantBookings(queryParams));
    } else {
      ({ data: bookings, meta } = await fetchUserBookings(queryParams));
    }

    console.log("booking and meta are:", bookings, meta);

    return (
      <BookingsClient
        bookings={bookings}
        meta={meta}
        filters={filters}
        role={validRole}
      />
    );
  } catch (error) {
    console.error("Booking data fetch failed:", error);
    return (
      <div className="p-6 text-red-500">
        Failed to load bookings. Please try logging in again or refresh the
        page.
      </div>
    );
  }
}
