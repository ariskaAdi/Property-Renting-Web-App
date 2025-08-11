import { Star, Users, Bath, Bed } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Property {
  id: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  title: string;
  location: string;
  rating: number;
  beds: number;
  baths: number;
  guests: number;
  originalPrice?: string;
  price: string;
  period: string;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full">
      <div className="relative">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={300}
          height={200}
          className="w-full h-40 sm:h-48 object-cover"
        />
        {property.badge && (
          <Badge
            className={`absolute top-2 sm:top-3 left-2 sm:left-3 ${property.badgeColor} text-white border-0 text-xs`}>
            {property.badge}
          </Badge>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 flex-1">
            {property.title}
          </h3>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">
              {property.rating}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
          {property.location}
        </p>

        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Bed className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{property.guests}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {property.originalPrice && (
              <span className="text-xs sm:text-sm text-gray-400 line-through">
                {property.originalPrice}
              </span>
            )}
            <span className="font-bold text-base sm:text-lg">
              {property.price}
            </span>
            <span className="text-xs sm:text-sm text-gray-600">
              /{property.period}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
