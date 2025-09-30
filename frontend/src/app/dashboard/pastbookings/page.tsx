"use client";

import {
  Booking,
  BookingStatus,
  Filters,
  isValidBookingStatus,
  isValidSort,
  Meta,
  SortStatus,
} from "@/types/transactions/transactions";
import axios from "axios";
import { PastBookingsClient } from "@/components/dashboard/PastBookingsClientPage";
import { useSearchParams } from "next/navigation";
import { useFetchMe } from "@/hooks/useUser";
import { useMemo } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export interface BookingApiResponse {
  data: {
    data: Booking[];
    meta: Meta;
  };
}

const fetchBookingsClient = async (
  role: string,
  filters: Filters
): Promise<BookingApiResponse> => {
  const endpoint =
    role === "tenant"
      ? `${BASE_URL}/payment/orders`
      : `${BASE_URL}/reservations/get`;

  const response = await axios.get<BookingApiResponse>(endpoint, {
    params: filters,
    withCredentials: true,
  });

  return response.data;
};

export default function PastBookingsPage() {
  const searchParams = useSearchParams();
  const { data: userData, isLoading: isUserLoading } = useFetchMe();

  const role = userData?.role === "tenant" ? "tenant" : "user";
  const userIsAuthenticated = !!userData;

  const filters: Filters = useMemo(() => {
    const statusParam = searchParams.get("status");
    const sortParam = searchParams.get("sort");
    const pageParam = searchParams.get("page");
    const bookingIdParam = searchParams.get("bookingId");
    const startDateParam = searchParams.get("startDate");
    const endDateParam = searchParams.get("endDate");

    return {
      status: isValidBookingStatus(statusParam)
        ? (statusParam as BookingStatus)
        : "confirmed",
      sort: isValidSort(sortParam) ? (sortParam as SortStatus) : "desc",
      page: pageParam || "1",
      bookingId: bookingIdParam || "",
      startDate: startDateParam || "",
      endDate: endDateParam || "",
    };
  }, [searchParams]);
  const queryString = useMemo(() => {
    return new URLSearchParams(filters as Record<string, string>).toString();
  }, [filters]);

  const queryKeyArray = useMemo(() => {
    return ["bookings", role, queryString];
  }, [role, queryString]);

  const {
    data: bookingData,
    isLoading: isBookingLoading,
    isError: isBookingError,
    isFetching,
  } = useQuery<BookingApiResponse>({
    queryKey: queryKeyArray,
    queryFn: () => {
      return fetchBookingsClient(role, filters);
    },
    enabled: userIsAuthenticated && !isUserLoading,
    staleTime: 1000 * 60 * 1,
    placeholderData: keepPreviousData,
  });

  const bookingsArray = bookingData?.data.data ?? [];
  const meta = bookingData?.data.meta;

  if (isUserLoading || !userIsAuthenticated) {
    return (
      <div className="p-6 text-red-500">
        {isUserLoading
          ? "Checking authentication..."
          : "Failed to load bookings. Please login again or refresh."}
      </div>
    );
  }

  if (isBookingLoading) {
    return <div className="p-6">Loading bookings...</div>;
  }

  if (isBookingError || !bookingData) {
    return (
      <div className="p-6 text-red-500">
        Failed to load bookings. Please try refreshing the page.
      </div>
    );
  }

  return (
    <PastBookingsClient
      bookings={bookingsArray}
      meta={meta}
      filters={filters}
      role={role}
      isFetching={isFetching}
    />
  );
}
