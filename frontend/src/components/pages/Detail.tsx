"use client";

import Image from "next/image";
import {
  Heart,
  Star,
  Calendar,
  Square,
  Tv,
  Wind,
  Projector,
  Table,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";

export default function PropertyDetailPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4 lg:col-span-3">
                <Image
                  src="https://picsum.photos/400/300"
                  alt="Main workspace area"
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="col-span-4 lg:col-span-1 grid gap-2">
                <Image
                  src="https://picsum.photos/400/300"
                  alt="Bedroom area"
                  width={300}
                  height={195}
                  className="w-full h-[195px] object-cover rounded-lg"
                />
                <Image
                  src="https://picsum.photos/400/300"
                  alt="Kitchen area"
                  width={300}
                  height={195}
                  className="w-full h-[195px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    21 Poland Street, #2
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="text-sm font-medium">4.6</span>
                      <span className="text-sm text-gray-500">
                        (241 ratings)
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Accommodates */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Accommodates</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Air tables</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">In lounge</span>
                      <span className="font-medium">7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Maximum total
                      </span>
                      <span className="font-medium">56</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Sq. ft.</span>
                      <span className="font-medium">925</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-fit mt-4">
                    View floor plan
                  </Button>
                </CardContent>
              </Card>

              {/* Opening Hours */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Opening hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Mon – Fri</span>
                      <span className="text-sm">8:00 am – 9:00 pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sat</span>
                      <span className="text-sm">9:00 am – 9:00 pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sun</span>
                      <span className="text-sm">10:00 am – 7:00 pm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Wind className="w-5 h-5 text-gray-400" />
                      <span className="text-sm">AC</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Tv className="w-5 h-5 text-gray-400" />
                      <span className="text-sm">Apple TV</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-200 rounded"></div>
                      <span className="text-sm">Skylight</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Square className="w-5 h-5 text-gray-400" />
                      <span className="text-sm">Whiteboards (2)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-200 rounded"></div>
                      <span className="text-sm">Ensuite kitchen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wind className="w-5 h-5 text-gray-400" />
                      <span className="text-sm">Air Purification TV</span>
                    </div>
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 mt-4">
                    Show 8 more
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">
                    Additional in-room services
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Projector className="w-5 h-5 text-gray-400" />
                        <span className="text-sm">Projector</span>
                      </div>
                      <span className="text-sm font-medium">$60</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Square className="w-5 h-5 text-gray-400" />
                        <span className="text-sm">Projection screen</span>
                      </div>
                      <span className="text-sm font-medium">$60</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Table className="w-5 h-5 text-gray-400" />
                        <span className="text-sm">Multipurpose table</span>
                      </div>
                      <span className="text-sm font-medium">$100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gray-200 rounded"></div>
                        <span className="text-sm">Pack of folding chairs</span>
                      </div>
                      <span className="text-sm font-medium">$50</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mobile Fixed Booking Bar */}
          <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t shadow-lg z-50 lg:hidden">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500">From</span>
                <div className="text-lg font-bold">$61/hr</div>
              </div>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={() => setOpen(true)}>
                Reserve now
              </Button>
            </div>
          </div>

          {/* Modal Booking Detail (Mobile) */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Book this space</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Choose a date and time
                </Button>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-600">From</span>
                    <div className="text-2xl font-bold">$61/hr</div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-semibold">$504/day</span>
                  </div>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Reserve now
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  You wont be charged until after your reservation begins.
                  Cancellations are free up to 2 hours before.
                </div>

                <Button variant="outline" className="w-full">
                  Request free tour
                </Button>

                <div className="border-t pt-4">
                  <div className="text-sm font-medium mb-2">
                    Rent this space monthly
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    Access weekdays office space at a fraction of the cost of a
                    traditional lease with.
                  </div>
                  <Button variant="link" className="text-blue-600 p-0 text-sm">
                    Learn more
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Right Column - Booking */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardContent className="p-6 space-y-4">
                  {/* Booking Header */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Choose a date and time
                    </Button>
                  </div>

                  {/* Pricing */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-600">From</span>
                      <div className="text-2xl font-bold">$61/hr</div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold">$504/day</span>
                    </div>
                  </div>

                  {/* Reserve Button */}
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Reserve now
                  </Button>

                  <div className="text-xs text-gray-500 text-center">
                    You wont be charged until after your reservation begins.
                    Cancellations are free up to 2 hours before.
                  </div>

                  <Button variant="outline" className="w-full">
                    Request free tour
                  </Button>

                  {/* Monthly Rental */}
                  <div className="border-t pt-4">
                    <div className="text-sm font-medium mb-2">
                      Rent this space monthly
                    </div>
                    <div className="text-xs text-gray-500 mb-3">
                      Access weekdays office space at a fraction of the cost of
                      a traditional lease with.
                    </div>
                    <Button
                      variant="link"
                      className="text-blue-600 p-0 text-sm">
                      Learn more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
