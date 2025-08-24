"use client";

import { useProperties } from "@/hooks/useProperty";
import { PropertyCard } from "./property-card";
import { ApiProperty } from "@/types/room/room";

interface PropertyGridProps {
  category: string;
}

export function PropertyGrid({ category }: PropertyGridProps) {
  const { data, isLoading, error } = useProperties(category);

  console.log("Current category:", category); // ✅ cek category update

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading properties</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {data?.map((property: ApiProperty) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
