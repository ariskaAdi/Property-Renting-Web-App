import { fetchAllRooms } from "@/services/room.service";
import { useQuery } from "@tanstack/react-query";

export const useRoom = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: fetchAllRooms,
  });
};
