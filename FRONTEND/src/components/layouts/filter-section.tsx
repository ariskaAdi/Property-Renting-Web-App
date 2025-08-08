import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

const filterOptions = [
  { label: "All", active: true },
  { label: "Top Villa", active: false },
  { label: "Free Reschedule", active: false },
  { label: "Book Now Pay Later", active: false },
  { label: "Self Check-in", active: false },
  { label: "Instant Book", active: false },
];

export function FilterSection() {
  return (
    <div className="space-y-4 mb-6">
      {/* Mobile Filter Options - Horizontal Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
        {filterOptions.map((option, index) => (
          <Button
            key={index}
            variant={option.active ? "default" : "ghost"}
            size="sm"
            className={`${
              option.active ? "bg-black text-white" : "text-gray-600"
            } whitespace-nowrap flex-shrink-0`}>
            {option.label}
          </Button>
        ))}
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex-1" />
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
          <Select defaultValue="highest-price">
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="highest-price">
                Sort by: Highest Price
              </SelectItem>
              <SelectItem value="lowest-price">
                Sort by: Lowest Price
              </SelectItem>
              <SelectItem value="newest">Sort by: Newest</SelectItem>
              <SelectItem value="rating">Sort by: Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
