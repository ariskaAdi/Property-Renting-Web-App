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
import { usePropertiesByLocation } from "@/hooks/useProperty";

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

  // ambil params dari URL
  const queryLat = searchParams.get("lat");
  const queryLng = searchParams.get("lng");
  const queryRadius = searchParams.get("radius");

  // default posisi
  const defaultLat = -8.135751241420579;
  const defaultLng = 112.57835021683894;

  const [radius, setRadius] = useState([Number(queryRadius) || 5]);

  const latitude = queryLat ? parseFloat(queryLat) : defaultLat;
  const longitude = queryLng ? parseFloat(queryLng) : defaultLng;

  // update URL setiap radius berubah
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lat", latitude.toString());
    params.set("lng", longitude.toString());
    params.set("radius", radius[0].toString());
    router.push(`/property?${params.toString()}`);
  }, [latitude, longitude, radius, router, searchParams]);

  const { data, isLoading } = usePropertiesByLocation(
    latitude,
    longitude,
    radius[0]
  );

  const properties: Property[] = data?.properties ?? [];
  const rooms: Room[] = properties.flatMap((p) => p.rooms);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [mapView, setMapView] = useState(true);

  const FilterSidebar = () => (
    <div className="space-y-6 p-4">
      {/* Map/List Toggle */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">View</Label>
        <div className="flex items-center space-x-2">
          <Button
            variant={mapView ? "default" : "outline"}
            size="sm"
            onClick={() => setMapView(true)}
            className="flex-1">
            <MapPin className="w-4 h-4 mr-1" />
            Map
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
        <Label className="text-sm font-medium">Radius (km)</Label>
        <Slider
          value={radius}
          onValueChange={setRadius}
          max={20}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>1 km</span>
          <span>20 km</span>
        </div>
      </div>
    </div>
  );

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
          <Badge variant="secondary">
            Rp {room.base_price.toLocaleString()}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Desktop */}
      <div className="hidden lg:block w-64 bg-white shadow-sm border-r">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Filters</h2>
        </div>
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header Mobile */}
        <div className="bg-white shadow-sm border-b p-4 md:hidden">
          <div className="flex items-center justify-between mb-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
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
        </div>

        {/* Map + Sidebar (child) */}
        <MapPages>
          {() => (
            <>
              <div className="hidden lg:block">
                <div className="p-4 space-y-4">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : rooms.length > 0 ? (
                    rooms.map((room) => <RoomCard key={room.id} room={room} />)
                  ) : (
                    <p>No rooms found</p>
                  )}
                </div>
              </div>
              <Button
                onClick={() => setResultsOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded ">
                Show All Results ({rooms.length})
              </Button>
            </>
          )}
        </MapPages>
      </div>

      {/* Mobile Results Panel */}
      <Sheet open={resultsOpen} onOpenChange={setResultsOpen}>
        <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
          <SheetHeader className="pb-4">
            <SheetTitle>Results ({rooms.length})</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
