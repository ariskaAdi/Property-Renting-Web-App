import {
  Home,
  Building,
  Castle,
  CaravanIcon as Cabin,
  HomeIcon as House,
  Tent,
  Truck,
  Trees,
  Waves,
  Plane,
} from "lucide-react";

const propertyTypes = [
  { icon: Home, label: "Rental" },
  { icon: Building, label: "Apartment" },
  { icon: House, label: "Villa" },
  { icon: Castle, label: "Mansion" },
  { icon: Cabin, label: "Cabin" },
  { icon: House, label: "Tiny House" },
  { icon: Tent, label: "Camp House" },
  { icon: Truck, label: "Trailer" },
  { icon: Trees, label: "Tree House" },
  { icon: Waves, label: "Beach House" },
  { icon: Plane, label: "Hangar" },
];

export function PropertyTypeNav() {
  return (
    <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-2">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1 sm:space-y-2 min-w-0 flex-shrink-0 px-2 sm:px-4 cursor-pointer hover:bg-gray-50 rounded-lg py-2 transition-colors">
              <type.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              <span className="text-xs text-gray-600 whitespace-nowrap text-center">
                {type.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
