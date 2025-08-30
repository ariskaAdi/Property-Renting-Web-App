"use client";

import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useFetchMe } from "@/hooks/useUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import InputDate from "@/components/fragment/inputDate/inputDate";

export function Header() {
  const { data: user, error, isLoading } = useFetchMe();
  const isLoggedIn = !!user;
  const router = useRouter();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Kiri - Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">h</span>
          </div>
          <span className="text-xl font-semibold">hide</span>
        </Link>

        {/* Tengah - Search Bar */}
        <div className="flex-1 flex justify-center px-4">
          <InputDate />
        </div>

        {/* Kanan - Actions */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <Button variant="ghost" size="icon">
            <Bell className="w-4 h-4" />
          </Button>

          {isLoading ? (
            <span className="text-sm text-gray-500">Loading...</span>
          ) : isLoggedIn ? (
            <>
              {user?.is_verified ? (
                <div className="flex items-center space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-2 px-2 hover:bg-transparent">
                        <Avatar className="w-8 h-8">
                          {user?.profile_picture ? (
                            <AvatarImage src={user.profile_picture} />
                          ) : (
                            <AvatarFallback>
                              {user?.full_name?.charAt(0).toUpperCase() || "U"}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <span className="text-sm font-medium">
                          {user?.full_name}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {user.full_name}
                          </p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => router.push("/dashboard")}>
                        Dashboard
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-red-500">
                    Email not verified
                  </span>
                  <Link href={`/auth/verify-email/${user?.email}`}>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs">
                      Verify Email
                    </Button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <Link href="/auth/login">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center space-x-2 flex-shrink-0">
          <Button variant="ghost" size="icon">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-4 h-4" />
          </Button>

          <Avatar className="w-8 h-8">
            <AvatarImage
              src={
                user?.profile_picture || "/placeholder.svg?height=32&width=32"
              }
            />
            <AvatarFallback>
              {user?.full_name?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>

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
                    <AvatarImage
                      src={
                        user?.profile_picture ||
                        "/placeholder.svg?height=32&width=32"
                      }
                    />
                    <AvatarFallback>
                      {user?.full_name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">
                    {user?.full_name || "User"}
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
