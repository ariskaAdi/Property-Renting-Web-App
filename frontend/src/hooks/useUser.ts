import { fetchMe } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useFetchMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    retry: false,
  });
};
