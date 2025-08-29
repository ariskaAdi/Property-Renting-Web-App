"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter, Users } from "lucide-react";
import Image from "next/image";
import MapPages from "../layouts/search-property/Map";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { usePropertiesByLocation } from "@/hooks/useProperty";
import { formatCurrency } from "@/lib/utils";

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

export default function PropertyDiscovery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Ambil params dari URL
  const queryLat = searchParams.get("lat");
  const queryLng = searchParams.get("lng");
  const queryRadius = searchParams.get("radius");
  const queryCheckIn = searchParams.get("checkIn");
  const queryCheckOut = searchParams.get("checkOut");
  const queryCategory = searchParams.get("category");
  const queryMinPrice = searchParams.get("minPrice");
  const queryMaxPrice = searchParams.get("maxPrice");

  // Default posisi peta
  const defaultLat = -8.135751241420579;
  const defaultLng = 112.57835021683894;

  const latitude = queryLat ? parseFloat(queryLat) : defaultLat;
  const longitude = queryLng ? parseFloat(queryLng) : defaultLng;
  const [radius, setRadius] = useState([Number(queryRadius) || 5]);

  // Date Range
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: queryCheckIn ? new Date(queryCheckIn) : undefined,
    to: queryCheckOut ? new Date(queryCheckOut) : undefined,
  });

  // Price Range
  const [priceRange, setPriceRange] = useState([
    queryMinPrice ? parseInt(queryMinPrice) : 100000,
    queryMaxPrice ? parseInt(queryMaxPrice) : 1000000,
  ]);

  // Update URL setiap filter berubah
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lat", latitude.toString());
    params.set("lng", longitude.toString());
    params.set("radius", radius[0].toString());

    if (dateRange?.from)
      params.set("checkIn", dateRange.from.toISOString().split("T")[0]);
    if (dateRange?.to)
      params.set("checkOut", dateRange.to.toISOString().split("T")[0]);

    if (priceRange[0]) params.set("minPrice", priceRange[0].toString());
    if (priceRange[1]) params.set("maxPrice", priceRange[1].toString());

    if (queryCategory) params.set("category", queryCategory);

    const newUrl = `/property?${params.toString()}`;
    if (newUrl !== window.location.search) {
      router.push(newUrl);
    }
  }, [
    latitude,
    longitude,
    radius,
    dateRange,
    priceRange,
    queryCategory,
    router,
    searchParams,
  ]);

  const { data, isLoading, isError } = usePropertiesByLocation(
    latitude,
    longitude,
    radius[0],
    queryCheckIn && queryCheckIn !== "undefined" ? queryCheckIn : undefined,
    queryCheckOut && queryCheckOut !== "undefined" ? queryCheckOut : undefined,
    queryCategory && queryCategory !== "undefined" ? queryCategory : undefined,
    queryMinPrice && queryMinPrice !== "undefined"
      ? parseInt(queryMinPrice)
      : undefined,
    queryMaxPrice && queryMaxPrice !== "undefined"
      ? parseInt(queryMaxPrice)
      : undefined
  );

  const properties: Property[] = data?.properties ?? [];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [mapView, setMapView] = useState(true);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load data</p>;

  // Sidebar filter
  const FilterSidebar = () => (
    <div className="space-y-6 p-4">
      {/* Toggle Map/List */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">View</Label>
        <div className="flex items-center space-x-2">
          <Button
            variant={mapView ? "default" : "outline"}
            size="sm"
            onClick={() => setMapView(true)}
            className="flex-1">
            <MapPin className="w-4 h-4 mr-1" /> Map
          </Button>
          <Button
            variant={!mapView ? "default" : "outline"}
            size="sm"
            onClick={() => setMapView(false)}
            className="flex-1">
            List
          </Button>
        </div>
      </div>

      {/* Radius Filter */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Radius ({radius[0]} km)</Label>
        <Slider
          value={radius}
          onValueChange={setRadius}
          max={20}
          min={1}
          step={1}
        />
      </div>

      {/* Date Range Filter */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Check-in & Check-out</Label>
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
        />
      </div>

      {/* Price Filter */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">
          Price Range (Rp {priceRange[0].toLocaleString()} – Rp{" "}
          {priceRange[1].toLocaleString()})
        </Label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={2000000}
          min={50000}
          step={50000}
        />
      </div>
    </div>
  );

  // Card untuk tiap Room
  const RoomCard = ({ room }: { room: Room }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <Image
          src={room.image || "/placeholder.svg"}
          alt={room.name}
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{room.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {room.description}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>Max {room.capacity} Guests</span>
          </div>
          <Badge variant="secondary">{formatCurrency(room.base_price)}</Badge>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Desktop */}
      <div className="hidden lg:block w-72 bg-white shadow-sm border-r">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Filters</h2>
        </div>
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header Mobile */}
        <div className="bg-white shadow-sm border-b p-4 md:hidden">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <FilterSidebar />
            </SheetContent>
          </Sheet>
        </div>

        {/* Map + List */}
        <MapPages>
          {() => (
            <div className="p-4 space-y-6">
              {isLoading ? (
                <p>Loading...</p>
              ) : properties.length > 0 ? (
                properties.map((property) => (
                  <div key={property.id} className="mb-8">
                    <div className="grid grid-cols-1 gap-4">
                      {property.rooms.map((room) => (
                        <RoomCard key={room.id} room={room} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p>No properties found</p>
              )}
            </div>
          )}
        </MapPages>
      </div>

      {/* Mobile Results */}
      <Sheet open={resultsOpen} onOpenChange={setResultsOpen}>
        <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
          <SheetHeader className="pb-4">
            <SheetTitle>Results ({properties.length})</SheetTitle>
          </SheetHeader>
          <div className="space-y-6">
            {properties.map((property) => (
              <div key={property.id}>
                <h2 className="text-lg font-bold">{property.name}</h2>
                <p className="text-gray-600 mb-4">{property.address}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
