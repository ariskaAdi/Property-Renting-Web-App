"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import Link from "next/link";
import { addDays, format } from "date-fns";

type City = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  picture: string;
};

const cities: City[] = [
  {
    id: 1,
    name: "Jakarta",
    latitude: -6.175, // pusat Kota Jakarta :contentReference[oaicite:0]{index=0}
    longitude: 106.8275, // :contentReference[oaicite:1]{index=1}
    picture: "/jakarta.jpg",
  },
  {
    id: 2,
    name: "Bandung",
    latitude: -6.9147, // pusat Kota Bandung :contentReference[oaicite:2]{index=2}
    longitude: 107.6098, // :contentReference[oaicite:3]{index=3}
    picture: "/bandung.jpg",
  },
  {
    id: 3,
    name: "Surabaya",
    latitude: -7.2504, // pusat Kota Surabaya :contentReference[oaicite:4]{index=4}
    longitude: 112.7688, // :contentReference[oaicite:5]{index=5}
    picture: "/surabaya.jpg",
  },
  {
    id: 4,
    name: "Bali",
    latitude: -8.3405, // Bali (pusat pulau Bali) :contentReference[oaicite:6]{index=6}
    longitude: 115.092, // :contentReference[oaicite:7]{index=7}
    picture: "/bali.jpg",
  },
  {
    id: 5,
    name: "Malang",
    latitude: -7.9839, // Kota Malang :contentReference[oaicite:8]{index=8}
    longitude: 112.6214, // :contentReference[oaicite:9]{index=9}
    picture: "/malang.jpg",
  },
];

export default function DestinationCard() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const today = new Date();
  const tomorrow = addDays(today, 1);

  const checkIn = format(today, "yyyy-MM-dd");
  const checkOut = format(tomorrow, "yyyy-MM-dd");

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-8">
        Rekomendasi Destinasi Populer
      </h2>

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: cities.length >= 4,
        }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {cities.map((city) => {
            const params = new URLSearchParams({
              latitude: city.latitude.toString(),
              longitude: city.longitude.toString(),
              radius: "5",
              minPrice: "100000",
              maxPrice: "5000000",
              guests: "2",
              rooms: "1",
              checkIn,
              checkOut,
            });

            return (
              <CarouselItem
                key={city.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <Link href={`/property?${params.toString()}`} target="_blank">
                    <Card className="relative border-0 overflow-hidden h-full min-h-[15rem]">
                      <div className="relative w-full h-full hover:scale-105 transition-all duration-200">
                        <Image
                          src={city.picture}
                          alt={city.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 z-[1]" />
                        <CardContent className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                          <h3 className="text-lg font-bold">{city.name}</h3>
                          <p className="text-sm font-bold">
                            Find your dream home in {city.name}
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {cities.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              current === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
