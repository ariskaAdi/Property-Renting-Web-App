import { LoginResponse } from "@/types/auth/auth";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    `${BASE_URL}/auth/login`,
    {
      email,
      password_hash: password,
    },
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
  return response.data;
};
