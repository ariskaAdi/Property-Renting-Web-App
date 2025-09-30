"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookingsToolbar } from "./BookingToolbar";
import { PaginationControl } from "../fragment/pagination-control/PaginationControl";
import { BookingList } from "./BookingList";
import { Booking, Filters, Meta } from "@/types/transactions/transactions";
import { useCallback, useState, useTransition } from "react"


interface BookingsClientProps {
  bookings: Booking[];
  meta?: Meta;
  filters: Filters;
  role: "user" | "tenant";
  isFetching: boolean;
}

export function BookingsClient({
  bookings,
  meta,
  filters,
  role,
  isFetching
}: BookingsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();


  // Hanya dijalankan saat user action
  const handleFilterChange = useCallback((key: string, value: string | null) => {

    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      current.delete(key);
    } else {
      current.set(key, value);
    }
    current.set("page", "1");

    const search = current.toString();
    const query = search ? `?${search}` : "";


    startTransition(() => {
      router.push(`/dashboard/bookings${query}`);
    });
  }, [router, searchParams]);

  const handlePageChange = useCallback((newPage: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", String(newPage));

    startTransition(() => {
      router.push(`/dashboard/bookings?${current.toString()}`);
    });
  }, [router, searchParams]);

  const clearFilters = useCallback(() => {
    startTransition(() => {
      router.push(`/dashboard/bookings`);
    });
  }, [router]);

   const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadFile(file);
    }
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

        <CardContent className="py-6">
          {meta && meta.totalPages >= 1 && (
            <PaginationControl
              totalItems={meta.totalItems}
              pageSize={meta.limit}
              currentPage={Number(searchParams.get('page')) || meta.page}
              onPageChange={handlePageChange}
            />
          )}

          <BookingList
            bookings={bookings}
            role={role}
            isFetching={isFetching || isPending}
            isLoading={isFetching || isPending}
            isError={false}
            uploadFile={uploadFile}
            onFileSelect={handleFileSelect}
          />
        </CardContent>
      </Card>
    </div>
  );
}
