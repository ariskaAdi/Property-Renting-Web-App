"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookingsToolbar } from "./BookingToolbar";
import { PaginationControl } from "../fragment/pagination-control/PaginationControl";
import { Booking, Filters, Meta } from "@/types/transactions/transactions";
import { useState, useTransition } from "react";
import { BookingList } from "./BookingList";

interface BookingsClientProps {
  bookings: Booking[];
  meta?: Meta;
  filters: Filters;
  role: "user" | "tenant";
  isFetching: boolean;
}

export function BookingsClient({
  bookings,
  meta = { totalPages: 0, totalItems: 0, limit: 10, page: 1 },
  filters,
  role,
  isFetching,
}: BookingsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();

  // Hanya dijalankan saat user action
  const handleFilterChange = (key: string, value: string | null) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!value) current.delete(key);
    else current.set(key, value);
    current.set("page", "1");

    startTransition(() => {
      router.push(`/dashboard/bookings?${current.toString()}`);
    });
  };

  const handlePageChange = (newPage: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", String(newPage));

    startTransition(() => {
      router.push(`/dashboard/bookings?${current.toString()}`);
    });
  };

  const clearFilters = () => {
    startTransition(() => {
      router.push(`/dashboard/bookings`);
    });
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setUploadFile(file);
  };

  const isLoading = isPending && !bookings.length;

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

        <CardContent className="py-6">
          {meta?.totalPages && meta.totalPages >= 1 && (
            <PaginationControl
              totalItems={meta.totalItems ?? 0}
              pageSize={meta.limit ?? 10}
              currentPage={meta.page ?? 1}
              onPageChange={handlePageChange}
            />
          )}

          <BookingList
            bookings={bookings}
            role={role}
            isFetching={isFetching || isPending}
            isLoading={isLoading}
            isError={false}
            uploadFile={uploadFile}
            onFileSelect={handleFileSelect}
          />
        </CardContent>
      </Card>
    </div>
  );
}
