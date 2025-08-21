import { fetchAllProperties } from "@/services/property.services";
import { useQuery } from "@tanstack/react-query";

export const useProperty = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: fetchAllProperties,
  });
};
