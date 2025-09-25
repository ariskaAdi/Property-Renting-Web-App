<<<<<<< HEAD
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
=======
import Link from "next/link";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
<<<<<<< HEAD
import { Filter } from "lucide-react";
import MapPages from "./Map";
import { usePropertiesByLocation } from "@/hooks/useProperty";
import { formatCurrency } from "@/lib/utils";
import { PropertyCard } from "../property/property-card";
import { ApiProperty } from "@/types/room/room";
import Link from "next/link";

export interface Room {
  id: string;
  name: string;
  description: string;
  capacity: number;
  base_price: number;
  image?: string;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  distance: number;
  rooms: Room[];
}

interface PropertyDiscoveryProps {
  category?: string;
}

export default function PropertyDiscovery({
  category,
}: PropertyDiscoveryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Price range states
  const [tempRange, setTempRange] = useState<number[]>([0, 5_000_000]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 5_000_000]);

  useEffect(() => {
    const handler = setTimeout(() => setPriceRange(tempRange), 1500);
    return () => clearTimeout(handler);
  }, [tempRange]);

  // Query params
  const queryLat = searchParams.get("lat");
  const queryLng = searchParams.get("lng");
  const queryRadius = searchParams.get("radius");
  const queryCheckIn = searchParams.get("checkIn");
  const queryCheckOut = searchParams.get("checkOut");
  const queryCategory = category || searchParams.get("category");
  const queryMinPrice = searchParams.get("minPrice");
  const queryMaxPrice = searchParams.get("maxPrice");

  const defaultLat = -8.135751241420579;
  const defaultLng = 112.57835021683894;

  const latitude = queryLat ? parseFloat(queryLat) : defaultLat;
  const longitude = queryLng ? parseFloat(queryLng) : defaultLng;

  // Radius state
  const [tempRadius, setTempRadius] = useState<number[]>([
    Number(queryRadius) || 5,
  ]);
  const [radius, setRadius] = useState<number[]>([Number(queryRadius) || 5]);

  useEffect(() => {
    const handler = setTimeout(() => setRadius(tempRadius), 1500);
    return () => clearTimeout(handler);
  }, [tempRadius]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("lat", latitude.toString());
    params.set("lng", longitude.toString());
    params.set("radius", radius[0].toString());

    if (priceRange[0]) params.set("minPrice", priceRange[0].toString());
    if (priceRange[1]) params.set("maxPrice", priceRange[1].toString());

    if (queryCheckIn) params.set("checkIn", queryCheckIn);
    if (queryCheckOut) params.set("checkOut", queryCheckOut);
    if (queryCategory) params.set("category", queryCategory);

    const newSearch = `?${params.toString()}`;
    if (newSearch !== window.location.search) {
      router.push(`/property${newSearch}`);
    }
  }, [
    latitude,
    longitude,
    radius,
    priceRange,
    queryCheckIn,
    queryCheckOut,
    queryCategory,
    router,
    searchParams,
  ]);

  // Fetch data property
  const { data, isLoading, isError } = usePropertiesByLocation(
    latitude,
    longitude,
    radius[0],
    queryCheckIn || undefined,
    queryCheckOut || undefined,
    queryCategory || undefined,
    queryMinPrice ? parseInt(queryMinPrice) : undefined,
    queryMaxPrice ? parseInt(queryMaxPrice) : undefined
  );

  // Filter component
  const FilterSidebar = () => (
    <div className="space-y-6 p-4">
      {/* Radius Filter */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Radius ({radius[0]} km)</Label>
        <Slider
          value={tempRadius}
          onValueChange={setTempRadius}
          max={20}
          min={1}
          step={1}
        />
      </div>

      {/* Price Filter */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">
          Price Range ({formatCurrency(priceRange[0])} –{" "}
          {formatCurrency(priceRange[1])})
        </Label>
        <Slider
          value={tempRange}
          onValueChange={setTempRange}
          min={0}
          max={5_000_000}
          step={500_000}
          className="max-w-sm"
        />
      </div>
    </div>
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load data</p>;

  return (
    <div className="flex h-auto bg-gray-50">
      <div className="flex-1 flex flex-col">
        <MapPages>
          {() => (
=======

import MapPages from "./Map";
import { PropertyCard } from "../property/property-card";
import FileNotFoundPages from "@/components/fragment/loading-error/FileNotFound";
import { ApiProperty } from "@/types/room/room";
import { fetchPropertyByLocation } from "@/services/property.services";
import FilterSidebar from "./FilterSidebar";

export default async function PropertyDiscovery({
  searchParams,
  category,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  category?: string;
}) {
  // Query params
  const queryLat = searchParams.latitude as string | undefined;
  const queryLng = searchParams.longitude as string | undefined;
  const queryRadius = (searchParams.radius as string) || "5";
  const queryCheckIn = (searchParams.checkIn as string) || "";
  const queryCheckOut = (searchParams.checkOut as string) || "";
  const queryCategory = category || (searchParams.category as string) || "";
  const queryMinPrice = (searchParams.minPrice as string) || "0";
  const queryMaxPrice = (searchParams.maxPrice as string) || "5000000";
  const queryGuests = (searchParams.guests as string) || "1";
  const queryRooms = (searchParams.rooms as string) || "1";

  // Default location
  const defaultLat = -8.135751241420579;
  const defaultLng = 112.57835021683894;
  const latitude = queryLat ? parseFloat(queryLat) : defaultLat;
  const longitude = queryLng ? parseFloat(queryLng) : defaultLng;

  try {
    const data = await fetchPropertyByLocation(
      latitude,
      longitude,
      parseInt(queryRadius),
      queryCheckIn || undefined,
      queryCheckOut || undefined,
      queryCategory || undefined,
      parseInt(queryMinPrice),
      parseInt(queryMaxPrice),
      Number(queryGuests),
      Number(queryRooms)
    );

    const noOrInvalidProperties =
      !data?.properties ||
      data.properties.length === 0 ||
      parseInt(queryMinPrice) >= parseInt(queryMaxPrice) ||
      parseInt(queryRadius) <= 0;

    return (
      <div className="flex h-auto bg-gray-50">
        <div className="flex-1 flex flex-col">
          <MapPages properties={data?.properties ?? []}>
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
            <div className="p-4 space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
<<<<<<< HEAD
                    <Filter className="w-4 h-4" />
                    Filters
=======
                    <Filter className="w-4 h-4" /> Filters
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Filters</DialogTitle>
                  </DialogHeader>
                  <FilterSidebar />
                </DialogContent>
              </Dialog>

<<<<<<< HEAD
              {/* Grid property */}
              {data && data.properties && data.properties.length > 0 ? (
                data.properties.flatMap((property: ApiProperty) =>
                  property.rooms?.map((room) => (
                    <Link
                      key={room.id}
=======
              {!noOrInvalidProperties ? (
                data.properties.flatMap((property: ApiProperty) =>
                  property.rooms?.map((room) => (
                    <Link
                      key={property.id + "-" + room.id}
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
                      href={{
                        pathname: "/property/search",
                        query: {
                          propertyname: property.name,
                          roomname: room.name,
                          checkIn: queryCheckIn,
                          checkOut: queryCheckOut,
<<<<<<< HEAD
=======
                          guests: queryGuests,
                          rooms: queryRooms,
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
                        },
                      }}
                      className="block">
                      <PropertyCard property={property} room={room} />
                    </Link>
                  ))
                )
              ) : (
<<<<<<< HEAD
                <p>No properties found</p>
              )}
            </div>
          )}
        </MapPages>
      </div>
    </div>
  );
=======
                <div className="flex flex-col items-center justify-center py-16 text-center text-gray-600">
                  <p className="text-lg font-semibold mb-2">
                    No properties found
                  </p>
                  <p className="text-sm">
                    Try increasing the{" "}
                    <span className="font-medium">radius</span> or adjusting the{" "}
                    <span className="font-medium">price range</span>.
                  </p>
                </div>
              )}
            </div>
          </MapPages>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <FileNotFoundPages />;
  }
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
}
