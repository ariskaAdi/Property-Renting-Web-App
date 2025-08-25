import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAllProperties = async (params?: {
  property_category?: string;
}) => {
  const response = await axios.get(`${BASE_URL}/property/all`, { params });
  console.log(response.data);
  return response.data;
};
