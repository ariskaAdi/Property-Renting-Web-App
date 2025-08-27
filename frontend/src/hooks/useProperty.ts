import {
  createPropertyServices,
  fetchAllProperties,
  fetchPropertyByTenant,
} from "@/services/property.services";
import { createProperty } from "@/types/property/property";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useProperties = (category?: string) => {
  return useQuery({
    queryKey: ["properties", category],
    queryFn: () =>
      fetchAllProperties(category ? { property_category: category } : {}),
    select: (data) => data.properties,
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
