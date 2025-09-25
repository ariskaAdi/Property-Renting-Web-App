<<<<<<< HEAD
=======
export interface ReviewProps {
    id: string;
    rating: number;
    comment: string | null;
    tenant_reply: string | null;
    created_at: string;
}

>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
export interface Booking {
  id: string;
  user_id: string;
  property_id: string;
  status:
    | "waiting_payment"
    | "confirmed"
    | "canceled"
    | "canceled_by_tenant"
<<<<<<< HEAD
=======
    | "waiting_confirmation"
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
    | "expired";
  check_in_date: string;
  check_out_date: string;
  proof_image: string;
<<<<<<< HEAD
  amount: number;
=======
  payment_deadline: string;
  amount: number;
  total_price: number;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
  property: {
    main_image: string;
    name: string;
    city: string;
  };
  booking_rooms: {
    guests_count: number;
<<<<<<< HEAD
  };
=======
    price_per_night: number;
    room: Room;
  }[];
  _count: {
    reviews: number
  }
  
}

export interface Room {
  name: string;
  propertyId: string;
}

export interface Meta {
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}

export interface Filters {
  status:
    | "waiting_payment"
    | "confirmed"
    | "canceled"
    | "canceled_by_tenant"
    | "waiting_confirmation"
    | "expired";
  sort: "asc" | "desc" | undefined
}

export interface PaginatedBookings {
  data: Booking[];
  meta: Meta;
}

export interface BookingApiResponse {
  message: string;
  success: boolean;
  data: Booking;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
}

export interface BookingsApiResponse {
  message: string;
  success: boolean;
<<<<<<< HEAD
  data: Booking[];
}


// Type Guard Booking Status
export const VALID_BOOKING_STATUS = [
  "waiting_payment",
=======
  data: PaginatedBookings;
}

// Type Guard Booking Status
export const VALID_BOOKING_STATUS = [
  "waiting_payment",
  "waiting_confirmation",
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
  "confirmed",
  "canceled",
  "canceled_by_tenant",
  "expired",
] as const;

<<<<<<< HEAD
export type BookingStatus = typeof VALID_BOOKING_STATUS[number];

export function isValidBookingStatus(status: any): status is BookingStatus {
    return VALID_BOOKING_STATUS.includes(status)
}

// Type Guard Sort
export const VALID_SORT = [
    "asc",
    "desc"
] as const

export type SortStatus = typeof VALID_SORT[number]

export function isValidSort(sort: any): sort is SortStatus {
    return VALID_SORT.includes(sort)
=======
export const VALID_BOOKING_HISTORY_STATUS = [
  "confirmed",
  "canceled",
  "canceled_by_tenant",
  "expired",
] as const;

export type BookingStatus = (typeof VALID_BOOKING_STATUS)[number];

export type BookingHistoryStatus = Exclude<BookingStatus, "waiting_payment">;

export function isValidBookingStatus(status: any): status is BookingStatus {
  return VALID_BOOKING_STATUS.includes(status);
}

export function isValidBookingHistoryStatus(
  status: any
): status is BookingHistoryStatus {
  return (
    status !== "waiting_payment" &&
    VALID_BOOKING_HISTORY_STATUS.includes(status)
  );
}

// Type Guard Sort
export const VALID_SORT = ["asc", "desc"] as const;

export type SortStatus = (typeof VALID_SORT)[number];

export function isValidSort(sort: any): sort is SortStatus {
  return VALID_SORT.includes(sort);
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
}
