import React from "react";
import { Header } from "../layouts/header";
import { PropertyTypeNav } from "../layouts/property-type-nav";
import { FilterSection } from "../layouts/filter-section";
import { PropertyGrid } from "../layouts/property-grid";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PropertyTypeNav />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        <FilterSection />
        <PropertyGrid />
      </div>
    </div>
  );
};

export default HomePage;
