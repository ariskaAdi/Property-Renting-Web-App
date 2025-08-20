import {
  loginUser,
  newOtP,
  registerUser,
  verifyEmail,
} from "@/services/auth.services";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginUser(email, password),
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: ({
      name,
      email,
      password,
      role,
    }: {
      name: string;
      email: string;
      password: string;
      role: string;
    }) => registerUser(name, email, password, role),
  });
};

export const useNewOtp = () => {
  return useMutation({
    mutationFn: ({ email }: { email: string }) => newOtP(email),
  });
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: ({ email, otp }: { email: string; otp: string }) =>
      verifyEmail(email, otp),
  });
};
