import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAllRooms = async () => {
  const response = await axios.get(`${BASE_URL}/room/all`);
  console.log(response.data);
  return response.data;
};
