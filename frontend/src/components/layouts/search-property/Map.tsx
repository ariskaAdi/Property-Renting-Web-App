"use client";

import Map, { Marker, Popup } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePropertiesByLocation } from "@/hooks/useProperty";
import { FaHome } from "react-icons/fa";

// Definisikan type Property sesuai response API
type Property = {
  id: string;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  distance: number;
};

const MapPages = ({
  children,
}: {
  children: (props: {
    userLocation: { latitude: number; longitude: number } | null;
  }) => React.ReactNode;
}) => {
  const searchParams = useSearchParams();

  const queryLat = searchParams.get("lat");
  const queryLng = searchParams.get("lng");
  const queryZoom = searchParams.get("zoom");

  const [viewState, setViewState] = useState({
    longitude: 106.8456,
    latitude: -6.2088,
    zoom: 12,
  });

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  useEffect(() => {
    if (queryLat && queryLng) {
      setViewState((prev) => ({
        ...prev,
        latitude: parseFloat(queryLat),
        longitude: parseFloat(queryLng),
        zoom: queryZoom ? parseFloat(queryZoom) : prev.zoom,
      }));
      setUserLocation({
        latitude: parseFloat(queryLat),
        longitude: parseFloat(queryLng),
      });
    } else if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setViewState((prev) => ({
            ...prev,
            latitude,
            longitude,
          }));
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.warn("User denied location or error occurred", error);
        }
      );
    }
  }, [queryLat, queryLng, queryZoom]);

  // fetch property untuk marker
  const { data } = usePropertiesByLocation(
    userLocation?.latitude ?? 0,
    userLocation?.longitude ?? 0,
    5
  );

  const properties: Property[] = data?.properties ?? [];

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <div className="flex-1 relative">
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/ariska-adi/cmetwjjft000501s98r0t28p6"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          style={{ width: "100%", height: "100%" }}>
          {/* Marker user */}
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

          {/* Marker property */}
          {properties.map((p) => (
            <Marker
              key={p.id}
              latitude={parseFloat(p.latitude)}
              longitude={parseFloat(p.longitude)}
              anchor="bottom"
              onClick={() => setSelectedProperty(p)}>
              <FaHome className="w-8 h-8 text-blue-600 bg-white rounded-full p-1 shadow-md" />
            </Marker>
          ))}

          {/* Popup ketika klik marker */}
          {selectedProperty && (
            <Popup
              latitude={parseFloat(selectedProperty.latitude)}
              longitude={parseFloat(selectedProperty.longitude)}
              anchor="top"
              closeOnClick={false}
              onClose={() => setSelectedProperty(null)}>
              <div className="text-sm">
                <h4 className="font-bold">{selectedProperty.name}</h4>
                <p>{selectedProperty.address}</p>
                <p className="text-xs text-gray-500">
                  {selectedProperty.distance.toFixed(2)} km away
                </p>
              </div>
            </Popup>
          )}
        </Map>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l h-64 lg:h-full overflow-y-auto">
        <div className="p-4 space-y-4">{children({ userLocation })}</div>
      </div>
    </div>
  );
};

export default MapPages;
