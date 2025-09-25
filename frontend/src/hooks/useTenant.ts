<<<<<<< HEAD
import { useMutation } from "@tanstack/react-query";
import { registerTenant } from "@/services/tenant.services";
=======
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerTenant, updateTenant } from "@/services/tenant.services";
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
import { TenantTypes } from "@/types/tenant/tenant";

export const useRegisterTenant = () => {
  return useMutation({
    mutationFn: (tenant: TenantTypes) => registerTenant(tenant),
  });
};
<<<<<<< HEAD
=======

export const useUpdateTenant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      company_name: string;
      address: string;
      phone_number: string;
      logo?: File;
    }) =>
      updateTenant(
        data.company_name,
        data.address,
        data.phone_number,
        data.logo!
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
};
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
