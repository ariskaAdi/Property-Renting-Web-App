import { AuthResponse } from "@/types/auth/auth";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchMe = async () => {
  const response = await axios.get<AuthResponse>(`${BASE_URL}/user/me`, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data.user;
};
