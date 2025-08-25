import { prisma } from "../../config/prisma";
import { updateTenant } from "../../types/tenant/tenant.types";

export const findTenantByUserId = async (
  user_id: string
): Promise<{ id: string; logo: string | null } | null> => {
  return prisma.tenants.findUnique({
    where: { user_id },
    select: { id: true, logo: true },
  });
};

export const findTenantByEmail = async (email: string) => {
  return prisma.users.findUnique({
    where: { email },
  });
};

export const createNewTenant = async (data: {
  userId: string;
  company_name: string;
  address: string;
  phone_number: string;
  logo?: string | null;
}) => {
  return prisma.tenants.create({
    data: {
      user_id: data.userId,
      company_name: data.company_name,
      address: data.address,
      phone_number: data.phone_number,
      logo: data.logo ?? null,
    },
  });
};

export const updateTenantRepository = async (
  tenant_id: string,
  data: updateTenant
) => {
  return prisma.tenants.update({
    where: { id: tenant_id },
    data,
  });
};
