import {
  loginUser,
  logoutUser,
  newOtP,
  registerUser,
  verifyEmail,
} from "@/services/auth.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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

export const useNewOtpVerification = () => {
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

export const useLogoutUser = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,

    onSuccess: (data) => {
      queryClient.clear();

      toast.success(data.message || "Logged out successfully");

      router.push("/");

      router.refresh();
    },

    onError: (error) => {
      console.error("❌ Logout error:", error);

      queryClient.clear();

      toast.error("Logged out with errors");

      router.push("/login");
      router.refresh();
    },
  });
};
