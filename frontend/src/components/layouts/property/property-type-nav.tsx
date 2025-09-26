"use client";

import {
  Building,
  Home,
  Castle,
  Hotel,
  Tent,
  Users,
  Globe,
} from "lucide-react";
import { PropertyCategory } from "@/types/property/property";
import { useRouter, useSearchParams } from "next/navigation";

interface PropertyTypeNavProps {
<<<<<<< HEAD
  onSelectCategory: (value: string) => void;
<<<<<<< HEAD
  activeCategory: string; // 👈 tambahkan prop
=======
>>>>>>> main
=======
  onSelectCategory?: (value: string) => void;
  activeCategory: string;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
}

const propertyTypes = [
  { icon: Globe, label: "All", value: "" },
  { icon: Building, label: "Apartment", value: PropertyCategory.apartment },
  { icon: Home, label: "House", value: PropertyCategory.house },
  { icon: Castle, label: "Villa", value: PropertyCategory.villa },
  { icon: Hotel, label: "Hotel", value: PropertyCategory.hotel },
  { icon: Tent, label: "Hostel", value: PropertyCategory.hostel },
  { icon: Users, label: "Guesthouse", value: PropertyCategory.guesthouse },
];

<<<<<<< HEAD
<<<<<<< HEAD
export function PropertyTypeNav({
  onSelectCategory,
  activeCategory,
}: PropertyTypeNavProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sm:px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-2 lg:justify-center lg:gap-6 lg:overflow-x-visible">
          {propertyTypes.map((type, index) => {
            const isActive = activeCategory === type.value;
            return (
              <div
                key={index}
                onClick={() => {
                  onSelectCategory(type.value);
                }}
                className={`flex flex-col items-center space-y-1 sm:space-y-2 min-w-0 flex-shrink-0 px-2 sm:px-4 cursor-pointer rounded-lg py-2 transition-colors 
                   hover:bg-blue-50 text-gray-600"
                  }`}>
                <type.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-xs whitespace-nowrap text-center ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-600"
                  }`}>
                  {type.label}
                </span>
              </div>
            );
          })}
=======
export function PropertyTypeNav({ onSelectCategory }: PropertyTypeNavProps) {
=======
export function PropertyTypeNav({ activeCategory }: PropertyTypeNavProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    router.push(`?${params.toString()}#properties`, { scroll: false });
  };

>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
  return (
    <nav className="bg-white border-b border-gray-200 sm:px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-2 lg:justify-center lg:gap-6 lg:overflow-x-visible">
<<<<<<< HEAD
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              onClick={() => {
                console.log("Click:", type.value);
                onSelectCategory(type.value);
              }}
              className="flex flex-col items-center space-y-1 sm:space-y-2 min-w-0 flex-shrink-0 px-2 sm:px-4 cursor-pointer hover:bg-gray-50 rounded-lg py-2 transition-colors">
              <type.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              <span className="text-xs text-gray-600 whitespace-nowrap text-center">
                {type.label}
              </span>
            </div>
          ))}
>>>>>>> main
=======
          {propertyTypes.map((type, index) => {
            const isActive = activeCategory === type.value;
            return (
              <div
                key={index}
                onClick={() => handleSelect(type.value)}
                className={`flex flex-col items-center space-y-1 sm:space-y-2 min-w-0 flex-shrink-0 px-2 sm:px-4 cursor-pointer rounded-lg py-2 transition-colors 
                   hover:bg-blue-50`}>
                <type.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-xs font-bold whitespace-nowrap text-center ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-600"
                  }`}>
                  {type.label}
                </span>
              </div>
            );
          })}
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
        </div>
      </div>
    </nav>
  );
}
