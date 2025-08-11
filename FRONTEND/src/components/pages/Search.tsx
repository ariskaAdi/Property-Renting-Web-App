"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter, Star, Clock } from "lucide-react";
import Image from "next/image";
import MapPages from "../layouts/search-property/Map";

const property = [
  {
    id: 1,
    name: "Copa Vida",
    distance: "46-50 min",
    rating: 5.0,
    price: "$$",
    image: "https://picsum.photos/400/300",
    category: "American",
  },
  {
    id: 2,
    name: "ABC Coffee Bar",
    distance: "15-20 min",
    rating: 5.0,
    price: "$",
    image: "https://picsum.photos/400/300",
    category: "American",
  },
  {
    id: 3,
    name: "Sapoon Café",
    distance: "25-30 min",
    rating: 4.4,
    price: "$$",
    image: "https://picsum.photos/400/300",
    category: "Chinese",
  },
];

const cuisineTypes = [
  { id: "american", label: "American", checked: true },
  { id: "chinese", label: "Chinese", checked: true },
  { id: "italian", label: "Italian", checked: false },
];

export default function PropertyDiscovery() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [mapView, setMapView] = useState(true);
  const [priceRange, setPriceRange] = useState([1, 3]);
  const [starRating, setStarRating] = useState([1]);

  const FilterSidebar = () => (
    <div className="space-y-6 p-4">
      {/* Map/View Toggle */}
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

      {/* Category */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Category</Label>
        <Button variant="secondary" className="w-full justify-start">
          Foods
        </Button>
      </div>

      {/* Cuisine */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Cuisine</Label>
        <div className="space-y-2">
          {cuisineTypes.map((cuisine) => (
            <div key={cuisine.id} className="flex items-center space-x-2">
              <Checkbox
                id={cuisine.id}
                defaultChecked={cuisine.checked}
                className="rounded"
              />
              <Label htmlFor={cuisine.id} className="text-sm">
                {cuisine.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Price Range</Label>
        <div className="space-y-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={4}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>$</span>
            <span>$$$$</span>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Star Rating</Label>
        <div className="space-y-2">
          <Slider
            value={starRating}
            onValueChange={setStarRating}
            max={5}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>1</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );

  const RestaurantCard = ({
    restaurant,
  }: {
    restaurant: (typeof property)[0];
  }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <Image
          src={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-2 right-2 w-8 h-8 bg-white/80 hover:bg-white">
          <MapPin className="w-4 h-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg">{restaurant.name}</h3>
          <div className="flex items-center space-x-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{restaurant.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{restaurant.distance}</span>
          </div>
          <Badge variant="secondary">{restaurant.price}</Badge>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-white shadow-sm border-r">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Filters</h2>
        </div>
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
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

              <h1 className="text-xl font-semibold hidden sm:block">
                Property Discovery
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hidden sm:block">
                16 Results
              </span>
              <Select defaultValue="popular">
                <SelectTrigger className="w-32 sm:w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular first</SelectItem>
                  <SelectItem value="rating">Highest rated</SelectItem>
                  <SelectItem value="distance">Closest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <MapPages>
          <div className="hidden lg:block">
            <div className="p-4 space-y-4">
              {property.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
          <Button
            onClick={() => setResultsOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded ">
            Show All Results ({property.length})
          </Button>
        </MapPages>
      </div>

      {/* Mobile Results Panel */}
      <Sheet open={resultsOpen} onOpenChange={setResultsOpen}>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader className="pb-4">
            <SheetTitle>Results ({property.length})</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto">
            {property.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
