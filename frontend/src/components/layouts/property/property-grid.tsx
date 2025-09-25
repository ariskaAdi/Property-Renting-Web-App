"use client";

import FileNotFoundPages from "@/components/fragment/loading-error/FileNotFound";
import { ApiProperty } from "@/types/room/room";
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> main
=======
import Link from "next/link";
import { PropertyCard } from "./property-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

interface PropertyGridProps {
  data: (ApiProperty["rooms"][0] & { property: ApiProperty })[];
  total: number;
  page: number;
  itemsPerPage: number;
}

export function PropertyGrid({
  data,
  total,
  page,
  itemsPerPage,
}: PropertyGridProps) {
  const totalPages = Math.ceil(total / itemsPerPage);
  const router = useRouter();
  const searchParams = useSearchParams();

<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log("Current category:", category); // ✅ cek category update

>>>>>>> main
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading properties</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
<<<<<<< HEAD
      {data?.flatMap((property: ApiProperty) =>
        property.rooms?.map((room) => (
          <Link
            key={room.id}
            href={{
              pathname: "/property/search",
              query: {
                propertyname: property.name,
                roomname: room.name,
              },
            }}
            className="block">
            <PropertyCard property={property} room={room} />
          </Link>
        ))
      )}
=======
      {data?.map((property: ApiProperty) => (
        <PropertyCard key={property.id} property={property} />
      ))}
>>>>>>> main
=======
  const goToPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNumber));
    router.push(`?${params.toString()}#properties`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {data.length === 0 ? (
          <div className="col-span-full flex justify-center">
            <FileNotFoundPages />
          </div>
        ) : (
          data.map((room) => (
            <Link
              key={room.id}
              href={{
                pathname: "/property/search",
                query: {
                  propertyname: room.property.name,
                  roomname: room.name,
                },
              }}
              target="_blank">
              <PropertyCard property={room.property} room={room} />
            </Link>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {/* Prev */}
            <PaginationItem>
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}>
                <PaginationPrevious href="#" />
              </button>
            </PaginationItem>

            {/* Pages */}
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1;
              return (
                <PaginationItem key={pageNumber}>
                  <button onClick={() => goToPage(pageNumber)}>
                    <PaginationLink isActive={pageNumber === page}>
                      {pageNumber}
                    </PaginationLink>
                  </button>
                </PaginationItem>
              );
            })}

            {/* Next */}
            <PaginationItem>
              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }>
                <PaginationNext href="#" />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
    </div>
  );
}
