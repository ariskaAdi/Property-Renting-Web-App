import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
<<<<<<< HEAD
import type { LucideIcon } from "lucide-react";

interface PropertyCardProps {
=======
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { DeleteDialog } from "@/components/fragment/button-action/DeleteDialog";

interface PropertyCardProps {
  id: string;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
  name: string;
  city: string;
  category: string;
  roomsCount: number;
  mainImage?: string;
<<<<<<< HEAD
  icon: LucideIcon;
  color?: "blue" | "green" | "purple" | "orange";
}

const colorClasses = {
  blue: "text-blue-500",
  green: "text-green-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
};

=======
  EditIcon: LucideIcon;
  DeleteIcon: LucideIcon;
  editHref: string;
  onDelete?: () => void;
}

>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
export function PropertyCard({
  name,
  city,
  category,
  roomsCount,
  mainImage,
<<<<<<< HEAD
  icon: Icon,
  color = "blue",
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* Thumbnail */}
=======
  EditIcon,
  DeleteIcon,
  editHref,
  onDelete,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
      {mainImage && (
        <div className="relative h-32 w-full">
          <Image src={mainImage} alt={name} fill className="object-cover" />
        </div>
      )}
<<<<<<< HEAD
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
=======

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
          <div>
            <p className="text-lg font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{city}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {category} • {roomsCount} rooms
            </p>
          </div>
<<<<<<< HEAD
          <div className={`p-2 rounded-lg bg-muted ${colorClasses[color]}`}>
            <Icon className="w-5 h-5" />
=======

          {/* Action buttons */}
          <div className="flex gap-2">
            <Link
              href={editHref}
              className="p-2 rounded-lg bg-muted text-blue-500 hover:bg-blue-100 cursor-pointer">
              <EditIcon className="w-5 h-5" />
            </Link>

            {/* Delete with confirmation */}
            <DeleteDialog
              title="Delete Property"
              description={`Are you sure you want to delete "${name}"?`}
              onConfirm={onDelete ?? (() => {})}
              trigger={
                <button
                  type="button"
                  className="p-2 rounded-lg bg-muted text-red-500 hover:bg-red-100 cursor-pointer">
                  <DeleteIcon className="w-5 h-5" />
                </button>
              }
            />
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
