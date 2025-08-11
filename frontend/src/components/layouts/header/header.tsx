import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">h</span>
            </div>
            <span className="text-xl font-semibold">hide</span>
          </div>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search anything..."
              className="pl-10 bg-gray-50 border-gray-200 w-full"
            />
          </div>
        </div>

        {/* Desktop Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-4 h-4" />
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Save Your House
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Ruby Margot</span>
        </div>

        {/* Mobile/Tablet Right Side */}
        <div className="flex lg:hidden items-center space-x-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-4 h-4" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Button variant="ghost" className="justify-start">
                  Add Listings
                </Button>
                <Button variant="ghost" className="justify-start">
                  Add Agents
                </Button>
                <Button className="bg-red-500 hover:bg-red-600 text-white justify-start">
                  Save Your House
                </Button>
                <div className="flex items-center space-x-2 px-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Ruby Margot</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden mt-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search anything..."
            className="pl-10 bg-gray-50 border-gray-200 w-full"
          />
        </div>
      </div>
    </header>
  );
}
