"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { PropertyTypeNav } from "./property-type-nav";
import { PropertyGrid } from "./property-grid";

export function PropertyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("type") || "";

  return (
    <div>
      <PropertyTypeNav
        activeCategory={category}
        onSelectCategory={(value) => {
          const params = new URLSearchParams(searchParams.toString());
          if (value) {
            params.set("type", value);
          } else {
            params.delete("type");
          }
          router.push(`?${params.toString()}`);
        }}
      />
      <PropertyGrid category={category} />
    </div>
  );
}
