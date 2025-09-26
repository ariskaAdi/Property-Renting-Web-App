"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { PropertyTypeNav } from "./property-type-nav";
import { PropertyGrid } from "./property-grid";

export function PropertyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category") || "";

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <PropertyTypeNav
        onSelectCategory={setCategory}
        activeCategory={category}
      />
=======
      <PropertyTypeNav onSelectCategory={setCategory} />
>>>>>>> main
      <PropertyGrid category={category} />
=======
      <PropertyTypeNav
        activeCategory={category}
        onSelectCategory={(value) => {
          const params = new URLSearchParams(searchParams.toString());
          if (value) {
            params.set("category", value);
          } else {
            params.delete("category");
          }
          router.push(`?${params.toString()}`);
        }}
      />
      <PropertyGrid />
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
    </div>
  );
}
