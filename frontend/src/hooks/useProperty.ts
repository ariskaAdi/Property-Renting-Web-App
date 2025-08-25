import { fetchAllProperties } from "@/services/property.services";
import { useQuery } from "@tanstack/react-query";

export const useProperties = (category?: string) => {
  return useQuery({
    queryKey: ["properties", category],
    queryFn: () =>
      fetchAllProperties(category ? { property_category: category } : {}),
    select: (data) => data.properties,
  });
};
