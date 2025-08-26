import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAllRooms = async () => {
  const response = await axios.get(`${BASE_URL}/room/all`);
  console.log(response.data);
  return response.data;
};

export const fetchRoomsByQuery = async (
  propertyname?: string,
  roomname?: string
) => {
  const response = await axios.get(`${BASE_URL}/room/search`, {
    params: {
      propertyname,
      roomname,
    },
  });
  return response.data.response[0];
};
