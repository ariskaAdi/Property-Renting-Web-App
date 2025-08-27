"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect } from "react";

const MapPages = ({ children }: { children: React.ReactNode }) => {
  const [viewState, setViewState] = useState({
    longitude: 106.8456, // default Jakarta
    latitude: -6.2088,
    zoom: 12,
  });
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setViewState((prev) => ({
            ...prev,
            latitude,
            longitude,
          }));
          setUserLocation({ latitude, longitude });
          console.log(
            `User location: latitude: ${latitude}, longitude: ${longitude}`
          );
        },
        (error) => {
          console.warn(
            "User denied location or error occurred, fallback to Jakarta",
            error
          );
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <div className="flex-1 relative">
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/ariska-adi/cmetwjjft000501s98r0t28p6"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          style={{ width: "100%", height: "90%" }}>
          {/* Marker untuk lokasi user */}
          {userLocation && (
            <Marker
              latitude={userLocation.latitude}
              longitude={userLocation.longitude}
              anchor="center">
              <div className="relative w-4 h-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </div>
            </Marker>
          )}
        </Map>
      </div>

      <div className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l h-64 lg:h-full overflow-y-auto">
        <div className="p-4 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default MapPages;
