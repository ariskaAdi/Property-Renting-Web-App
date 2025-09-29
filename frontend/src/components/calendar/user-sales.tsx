"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// ------------------------------------------------------------------
// DEFINISI TIPE
// ------------------------------------------------------------------

type UserReport = {
  userId: string | number;
  name: string;
  email: string;
  totalBookings: number;
  totalSpent: number;
  lastBookingDate: string;
};

type Column = {
  key: keyof UserReport;
  label: string;
};

// Tipe respons dari API
interface ReportApiResponse {
  message: string;
  success: boolean;
  data: UserReport[]; // Asumsi API mengembalikan array UserReport
}

// ------------------------------------------------------------------
// FUNGSI FETCH CLIENT-SIDE
// ------------------------------------------------------------------

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchUserSalesReport = async (): Promise<UserReport[]> => {
  // Axios otomatis menangani cookie dari browser karena withCredentials: true
  const response = await axios.get<ReportApiResponse>(
    `${BASE_URL}/payment/user/report`,
    {
      withCredentials: true,
    }
  );

  // Mengembalikan data array yang dibutuhkan
  return response.data.data;
};

// ------------------------------------------------------------------
// KOMPONEN UTAMA (CLIENT)
// ------------------------------------------------------------------

export default function UserSalesTable() {
  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery<UserReport[]>({
    queryKey: ["userSalesReport"],
    queryFn: fetchUserSalesReport,
    retry: 1, // Coba ulang 1 kali jika gagal
  });

  const columns: Column[] = [
    { key: "userId", label: "User ID" },
    { key: "name", label: "Full Name" },
    { key: "email", label: "Email" },
    { key: "totalBookings", label: "Total Bookings" },
    { key: "totalSpent", label: "Total Spent" },
    { key: "lastBookingDate", label: "Last Booking Date" },
  ];

  // --- Handling Loading State ---
  if (isLoading) {
    return (
      <div className="p-8">
        <h2 className="font-bold mb-3">Your Top Spenders</h2>
        <div className="text-gray-500">Loading sales data...</div>
      </div>
    );
  }

  // --- Handling Error State ---
  if (isError || !userData) {
    console.error("Failed to load user sales report:", error);
    return (
      <div className="p-8 text-red-500">
        Failed to load sales data. Please ensure you are logged in and have
        access permissions.
      </div>
    );
  }

  // Jika data ada tetapi array kosong
  if (userData.length === 0) {
    return (
      <div className="p-8">
        <h2 className="font-bold mb-3">Your Top Spenders</h2>
        <div className="text-gray-500">No user sales data available.</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="font-bold mb-3">Your Top Spenders</h2>
      <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-md">
        <table className="w-full border-separate border-spacing-0 text-left">
          <caption className="sr-only">Customer booking overview</caption>
          <thead className="uppercase tracking-wide">
            <tr className="[&>th]:border-r [&>th]:border-[var(--color-border)] [&>th]:last:border-r-0">
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="
                    px-4 py-4 text-xs font-semibold 
                    bg-neutral-100 dark:bg-neutral-800 
                    text-neutral-600 dark:text-neutral-300 
                    first:rounded-tl-[var(--radius-xl)] last:rounded-tr-[var(--radius-xl)]
                  ">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm leading-relaxed text-[var(--color-foreground)]">
            {userData.map((user: UserReport) => (
              <tr
                key={user.userId}
                className="border-b border-[var(--color-border)] last:border-b-0 last:[&>td:first-child]:rounded-bl-[var(--radius-xl)] last:[&>td:last-child]:rounded-br-[var(--radius-xl)]">
                {columns.map((column: Column) => (
                  <td
                    key={column.key}
                    className="px-4 py-4 font-medium text-[var(--color-foreground)]">
                    {column.key === "totalSpent"
                      ? new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0, // Opsional: untuk tampilan mata uang yang bersih
                        }).format(user[column.key] as number)
                      : column.key === "lastBookingDate"
                      ? new Date(user[column.key]).toLocaleDateString("en-GB")
                      : user[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
