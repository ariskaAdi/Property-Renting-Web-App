"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";

interface MapboxFeature {
  id: string;
  type: string;
  place_name: string;
  text: string;
  center: [number, number]; // [lng, lat]
  context?: Array<{ id: string; text: string }>;
}

export default function InputDate() {
  const [date, setDate] = React.useState<DateRange | undefined>();
  const [location, setLocation] = React.useState<string>("");
  const [coords, setCoords] = React.useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [suggestions, setSuggestions] = React.useState<MapboxFeature[]>([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const handleInputChange = async (value: string) => {
    setLocation(value);
    if (!value) {
      setSuggestions([]);
      return;
    }

    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        value
      )}.json?access_token=${token}&autocomplete=true&types=place&country=id`
    );

    if (!res.ok) return;
    const data: { features: MapboxFeature[] } = await res.json();
    setSuggestions(data.features);
    setShowSuggestions(true);
  };

  const handleSelectSuggestion = (place: MapboxFeature) => {
    setLocation(place.place_name);
    const [lng, lat] = place.center;
    setCoords({ lat, lng });
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-2xl flex items-center border rounded-full bg-white p-4 overflow-visible relative z-50 justify-between">
      {/* Location Input */}
      <div className="relative ">
        <input
          type="text"
          value={location}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Where are you going?"
          className=" px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-white"
        />
        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white border rounded-lg mt-1 max-h-60 overflow-auto shadow-md z-50">
            {suggestions.map((place) => (
              <li
                key={place.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectSuggestion(place)}>
                {place.place_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Check-in */}
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center px-4 py-2 border-l text-left">
            <CalendarIcon className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">
              {date?.from ? format(date.from, "LLL dd") : "Check in"}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            disabled={{ before: new Date() }}
          />
        </PopoverContent>
      </Popover>

      {/* Check-out */}
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center px-4 py-2 border-l text-left">
            <CalendarIcon className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">
              {date?.to ? format(date.to, "LLL dd") : "Check out"}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Calendar mode="range" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>

      {/* Search Button */}
      <div className="flex items-center px-4 ">
        <Button
          className="rounded-full"
          onClick={() => console.log({ location, coords, date })}>
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
}
