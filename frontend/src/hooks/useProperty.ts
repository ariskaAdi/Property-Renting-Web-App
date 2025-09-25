<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
import {
  createPropertyServices,
  fetchAllProperties,
  fetchPropertyByLocation,
  fetchPropertyByTenant,
<<<<<<< HEAD
} from "@/services/property.services";
import { createProperty } from "@/types/property/property";
import { useMutation, useQuery } from "@tanstack/react-query";
=======
import { fetchAllProperties } from "@/services/property.services";
import { useQuery } from "@tanstack/react-query";
>>>>>>> main
=======
  getPropertyById,
  softDeletePropertyService,
  updatePropertyService,
} from "@/services/property.services";
import {
  createProperty,
  PropertyFilters,
  updateProperty,
} from "@/types/property/property";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

export const useProperties = (filters: PropertyFilters = {}) => {
  return useQuery({
    queryKey: ["properties", filters],
    queryFn: () => fetchAllProperties(filters),
    select: (data) => data.properties,
    staleTime: 60 * 1000,
  });
};

export const useCreateProperty = () => {
  return useMutation({
    mutationFn: (property: createProperty) => createPropertyServices(property),
  });
};

export const usePropertyByTenant = () => {
  return useQuery({
    queryKey: ["property-by-tenant"],
    queryFn: () => fetchPropertyByTenant(),
  });
};

export const usePropertiesByLocation = (
  latitude: number,
  longitude: number,
  radius: number,
  checkIn?: string,
  checkOut?: string,
  category?: string,
  minPrice?: number,
  maxPrice?: number,
  guests?: number,
  rooms?: number
) => {
  return useQuery({
    queryKey: [
      "properties-by-location",
      latitude,
      longitude,
      radius,
      checkIn,
      checkOut,
      category,
      minPrice,
      maxPrice,
      guests,
      rooms,
    ],
    queryFn: () =>
      fetchPropertyByLocation(
        latitude,
        longitude,
        radius,
        checkIn,
        checkOut,
        category,
        minPrice,
        maxPrice,
        guests,
        rooms
      ),

    enabled: !!latitude && !!longitude && !!radius && !!checkIn && !!checkOut,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePropertyById = (id: string) => {
  return useQuery({
    queryKey: ["property", id],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useUpdateProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, property }: { id: string; property: updateProperty }) =>
      updatePropertyService(id, property),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["property-by-tenant"] });
    },
    onError: (error) => {
      console.error(error);
      alert("Failed to update property");
    },
  });
};

export const useSoftDeleteProperty = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => softDeletePropertyService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["property-by-tenant"] });
    },
    onError: (error) => {
      console.error("Delete failed:", error);
    },
  });
};
<<<<<<< HEAD

export const useCreateProperty = () => {
  return useMutation({
    mutationFn: (property: createProperty) => createPropertyServices(property),
  });
};

export const usePropertyByTenant = () => {
  return useQuery({
    queryKey: ["property-by-tenant"],
    queryFn: () => fetchPropertyByTenant(),
  });
};

export const usePropertiesByLocation = (
  lat: number,
  lng: number,
  radius: number,
  checkIn?: string,
  checkOut?: string,
  category?: string,
  minPrice?: number,
  maxPrice?: number
) => {
  return useQuery({
    queryKey: [
      "properties-by-location",
      lat,
      lng,
      radius,
      checkIn,
      checkOut,
      category,
      minPrice,
      maxPrice,
    ],
    queryFn: () =>
      fetchPropertyByLocation(
        lat,
        lng,
        radius,
        checkIn,
        checkOut,
        category,
        minPrice,
        maxPrice
      ),
    enabled: !!lat && !!lng && !!radius,
    staleTime: 1000 * 60 * 5,
  });
};
=======
>>>>>>> main
