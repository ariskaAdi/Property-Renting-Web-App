import { AuthResponse } from "@/types/auth/auth";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  role: string
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${BASE_URL}/auth/register`, {
    full_name: name,
    email,
    password_hash: password,
    role,
  });
  console.log(response.data);
  return response.data;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
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

export const newOtP = async (email: string): Promise<AuthResponse> => {
  const response = await axios.patch<AuthResponse>(`${BASE_URL}/auth/new-otp`, {
    email,
  });
  console.log(response.data);
  return response.data;
};

export const verifyEmail = async (
  email: string,
  otp: string
): Promise<AuthResponse> => {
  const response = await axios.patch<AuthResponse>(
    `${BASE_URL}/auth/verify-email`,
    {
      email,
      verify_otp: otp,
    }
  );
  console.log(response.data);
  return response.data;
};

export const logoutUser = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/logout`,
      {},
      {
        withCredentials: true,
        timeout: 5000,
      }
    );

    return {
      success: true,
      message: response.data.message || "Logged out successfully",
    };
  } catch (err) {
    console.error(" Logout error:", err);

    return {
      success: true,
      message: "Logged out (with errors)",
    };
  }
};
