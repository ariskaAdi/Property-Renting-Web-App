import {
  Building,
  Home,
  Castle,
  Hotel,
  Tent,
  Users,
  Globe,
} from "lucide-react";

enum PropertyCategory {
  apartment = "apartment",
  house = "house",
  villa = "villa",
  hotel = "hotel",
  hostel = "hostel",
  guesthouse = "guesthouse",
}

const propertyTypes = [
  { icon: Globe, label: "All", value: "" }, // special case (no filter)
  { icon: Building, label: "Apartment", value: PropertyCategory.apartment },
  { icon: Home, label: "House", value: PropertyCategory.house },
  { icon: Castle, label: "Villa", value: PropertyCategory.villa },
  { icon: Hotel, label: "Hotel", value: PropertyCategory.hotel },
  { icon: Tent, label: "Hostel", value: PropertyCategory.hostel },
  { icon: Users, label: "Guesthouse", value: PropertyCategory.guesthouse },
];

export function PropertyTypeNav() {
  return (
    <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-2 lg:justify-center lg:gap-6 lg:overflow-x-visible">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1 sm:space-y-2 min-w-0 flex-shrink-0 px-2 sm:px-4 cursor-pointer hover:bg-gray-50 rounded-lg py-2 transition-colors"
              // onClick={() => {
              //   const query = type.value ? `?property_category=${type.value}` : "";
              //   window.location.href = `/property/all${query}`;
              // }}
            >
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
