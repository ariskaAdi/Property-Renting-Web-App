<<<<<<< HEAD
"use client";

import { Card, CardContent, CardHeader} from "@/components/ui/card";
import { useBookings } from "@/hooks/useBookings";
import { useMemo } from "react";
import type { FetchBookingsParams } from "@/services/transactions.services";
import { useRouter, useSearchParams } from "next/navigation";
=======
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
import {
  BookingStatus,
  isValidBookingStatus,
  isValidSort,
  SortStatus,
} from "@/types/transactions/transactions";
<<<<<<< HEAD
import { BookingList } from "@/components/dashboard/BookingList";
import { BookingsToolbar } from "@/components/dashboard/BookingToolbar";

const BookingsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State Management
  const filters = useMemo(() => {
    const urlStatus = searchParams.get("status");
    const status: BookingStatus = isValidBookingStatus(urlStatus)
      ? urlStatus
      : "waiting_payment";
    const urlSort = searchParams.get("sort");
    const sort: SortStatus = isValidSort(urlSort) ? urlSort : "asc";

    return {
      status: status,
      sort: sort,
      start: searchParams.get("start") ?? undefined,
      end: searchParams.get("end") ?? undefined,
      bookingId: searchParams.get("id") ?? undefined,
    };
  }, [searchParams]);

  const { data: bookings, isLoading, isError, error } = useBookings(filters);

  type FilterKeys = keyof FetchBookingsParams;

  const handleFilterChange = (key: FilterKeys, value: string | null) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      current.delete(key);
    } else {
      current.set(key, value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`/dashboard/bookings${query}`);
  };

  const clearFilters = () => {
    router.push(`/dashboard/bookings`);
  };

  return (
    <div className="p-6">
      <Card className="w-full max-w-7xl mx-auto">
        <CardHeader className="pb-4">
          <BookingsToolbar
            filters={filters}
            onClearFilters={clearFilters}
            onFilterChange={handleFilterChange}
          />
        </CardHeader>

        <CardContent>
          <BookingList
            bookings={bookings}
            isLoading={isLoading}
            isError={isError}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingsPage;
=======
import { getCurrentUser } from "@/lib/cookie-auth";
import { BookingsClient } from "@/components/dashboard/BookingsClientPage";
import { cookies } from "next/headers";
import axios from "axios";

type SearchParams ={
   [key: string]: string | string[] | undefined ;
};

type BookingsPageProps = {
  searchParams: Promise<SearchParams>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchUserBookings = async (searchParams: URLSearchParams) => {
  const endpoint = `${BASE_URL}/reservations/get`;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const response = await axios.get(endpoint, {
    params: searchParams,
    headers: {
      Cookie: token ? `token=${token}` : "",
    },
  });
  return response.data.data;
};

const fetchTenantBookings = async (searchParams: URLSearchParams) => {
  const endpoint = `${BASE_URL}/payment/orders/tenant`;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const response = await axios.get(endpoint, {
    params: searchParams,
    headers: {
      Cookie: token ? `token=${token}` : "",
    },
  });
  return response.data.data;
};

export default async function BookingsPage(props: BookingsPageProps) {

  const user = await getCurrentUser();
  const sp = await props.searchParams;

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
    bookingId: bookingId as string || ""
  };

  console.log("filters are: ", filters);
  const queryParams = new URLSearchParams(filters);

  let bookings;
  let meta;

  const validRole = role === "tenant" ? "tenant" : "user";

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
}
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
