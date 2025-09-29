import { logoutUser } from "@/services/auth.services";
import {
  changeEmailOtp,
  fetchMe,
  newOtp,
  resetPassword,
  updateProfile,
} from "@/services/user.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { full_name: string; profile_picture?: File }) =>
      updateProfile(data.full_name, data.profile_picture!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
};

export function useNewOtp() {
  return useMutation({
    mutationFn: async () => {
      return await newOtp();
    },
  });
}

export function useResetPassword() {
  return useMutation({
    mutationFn: async ({
      oldPassword,
      newPassword,
      otp,
    }: {
      oldPassword: string;
      newPassword: string;
      otp: string;
    }) => {
      return await resetPassword(oldPassword, newPassword, otp);
    },
  });
}

export function useChangeEmailOtp() {
  return useMutation({
    mutationFn: async (email: string) => {
      return await changeEmailOtp(email);
    },
  });
}

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["me"] });
      queryClient.clear();
    },
    onError: (error) => {
      console.error("Logout mutation failed:", error);
    },
  });
};
