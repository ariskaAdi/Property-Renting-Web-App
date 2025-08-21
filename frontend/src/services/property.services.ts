import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAllProperties = async () => {
  const response = await axios.get(`${BASE_URL}/property/all`);
  console.log(response.data);
  return response.data;
};
