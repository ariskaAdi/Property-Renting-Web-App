<<<<<<< HEAD
<<<<<<< HEAD
import { MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ApiProperty, Room } from "@/types/room/room";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: ApiProperty;
  room: Room;
}

export function PropertyCard({ property, room }: PropertyCardProps) {
=======
import { Users } from "lucide-react";
=======
import { MapPin, Users } from "lucide-react";
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ApiProperty, Room } from "@/types/room/room";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: ApiProperty;
  room: Room;
}

<<<<<<< HEAD
export function PropertyCard({ property }: PropertyCardProps) {
  const firstRoom = property.rooms?.[0];

>>>>>>> main
=======
export function PropertyCard({ property, room }: PropertyCardProps) {
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full">
      <div className="relative hover:scale-105 transition-all duration-200">
        <Image
<<<<<<< HEAD
<<<<<<< HEAD
          src={room.image || "/placeholder.svg"}
          alt={room.name}
=======
          src={firstRoom?.image || property.main_image || "/placeholder.svg"}
          alt={property.name}
>>>>>>> main
=======
          src={room.image || "public/roomplaceholder.svg"}
          alt={room.name}
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
          width={300}
          height={200}
          className="w-full h-40 sm:h-48 object-cover"
        />
        {property.property_category && (
          <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-500 text-white border-0 text-xs ">
            {property.property_category}
          </Badge>
        )}
      </div>

      <div className="p-3 sm:p-4">
<<<<<<< HEAD
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 mb-1">
<<<<<<< HEAD
          {room.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
          <MapPin className="w-4 h-4 inline mr-1" />
          {property.address}, {property.city}, {property.province}
        </p>

        {room && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-base sm:text-lg">
                {formatCurrency(room.base_price)}
=======
=======
        <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1 ">
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
          {property.name}
        </h3>
        <h3 className="font-bold text-gray-700 text-sm sm:text-base line-clamp-1 mb-1">
          {room.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-1">
          <MapPin className="w-4 h-4 inline mr-1" />
          {property.address}, {property.city}, {property.province}
        </p>

        {room && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-base sm:text-lg">
<<<<<<< HEAD
                Rp{Number(firstRoom.base_price).toLocaleString("id-ID")}
>>>>>>> main
=======
                {formatCurrency(room.base_price)}
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
              </span>
              <span className="text-xs sm:text-sm text-gray-600">/malam</span>
            </div>
            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-600">
              <Users className="w-4 h-4" />
<<<<<<< HEAD
<<<<<<< HEAD
              <span>{room.capacity} tamu</span>
=======
              <span>{firstRoom.capacity} tamu</span>
>>>>>>> main
=======
              <span>{room.capacity}</span>
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
