import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ApiProperty } from "@/types/room/room";

interface PropertyCardProps {
  property: ApiProperty;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const firstRoom = property.rooms?.[0];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full">
      <div className="relative">
        <Image
          src={firstRoom?.image || property.main_image || "/placeholder.svg"}
          alt={property.name}
          width={300}
          height={200}
          className="w-full h-40 sm:h-48 object-cover"
        />
        {property.property_category && (
          <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-500 text-white border-0 text-xs">
            {property.property_category}
          </Badge>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 mb-1">
          {property.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
          {property.address}, {property.city}, {property.province}
        </p>

        {firstRoom && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-base sm:text-lg">
                Rp{Number(firstRoom.base_price).toLocaleString("id-ID")}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">/malam</span>
            </div>
            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>{firstRoom.capacity} tamu</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
