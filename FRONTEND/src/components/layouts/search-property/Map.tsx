"use client";

import Map from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";

const MapPages = ({ children }: { children: React.ReactNode }) => {
  const [viewState, setViewState] = useState({
    longitude: 106.8456, // Jakarta
    latitude: -6.2088,
    zoom: 12,
  });

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Map/Content Area */}
      <div className="flex-1 relative">
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/ariska-adi/cme5oy58001a501s80a2icsqi"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Desktop Results Panel */}
      <div className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l h-64 lg:h-full overflow-y-auto">
        <div className="p-4 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default MapPages;
