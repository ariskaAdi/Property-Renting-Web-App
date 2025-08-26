import { fetchAllRooms, fetchRoomsByQuery } from "@/services/room.service";
import { useQuery } from "@tanstack/react-query";

export const useRoom = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: fetchAllRooms,
  });
};

export const useRoomSearch = (propertyname?: string, roomname?: string) => {
  return useQuery({
    queryKey: ["rooms", propertyname, roomname],
    queryFn: () => fetchRoomsByQuery(propertyname, roomname),
    enabled: !!propertyname || !!roomname,
  });
};
