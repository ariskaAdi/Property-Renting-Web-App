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

export interface BookingApiResponse {
  data: {
    data: Booking[];
    meta: Meta;
  };
}

type BookingsPageProps = {
  searchParams: Promise<SearchParams>;
};


const fetchBookingsClient = async (
  role: string,
  filters: Filters
): Promise<BookingApiResponse> => {
  const endpoint =
    role === "tenant"
      ? `${BASE_URL}/payment/orders/tenant`
      : `${BASE_URL}/reservations/get`;

  const response = await axios.get<BookingApiResponse>(endpoint, {
    params: filters,
    withCredentials: true,
  });

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const fetchUserBookings = async (searchParams: URLSearchParams) => {
  const endpoint = `${BASE_URL}/reservations/get`;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("No authentication token found");
  }
  const response = await axios.get(endpoint, {
    params: searchParams,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};


export default function BookingsPage() {
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
        : "waiting_confirmation",
      sort: isValidSort(sortParam) ? (sortParam as SortStatus) : "desc",
      page: pageParam || "1",
      bookingId: bookingIdParam || "",
      startDate: startDateParam || "",
      endDate: endDateParam || "",  
    };
  }, [searchParams]);

  console.log("[BookingsPage] Current filters:", filters);

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

  console.log("[BookingsPage] Fetched bookings:", bookingData, bookingsArray, meta);

  if (isUserLoading || !userIsAuthenticated) {
    return (
      <div className="p-6 text-red-500">
        {isUserLoading
          ? "Checking authentication..."
          : "Failed to load bookings. Please login again or refresh."}
      </div>
    );

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
  const user = await getCurrentUser();
  const sp = await searchParams;

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

  if (validRole === "tenant") {
    ({ data: bookings, meta } = await fetchTenantBookings(queryParams));
  } else {
    ({ data: bookings, meta } = await fetchUserBookings(queryParams));
  }

  console.log("booking and meta are:", bookings, meta);

  return (
    <BookingsClient

      bookings={bookingsArray}

      meta={meta}
      filters={filters}
      role={validRole}
    />
  );
}
