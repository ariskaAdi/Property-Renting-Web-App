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

export const createNewTenant = async (
  user_id: string,
  company_name: string,
  address: string,
  phone_number: string,
  logo: string
) => {
  return prisma.tenants.create({
    data: {
      user_id,
      company_name,
      address,
      phone_number,
      logo,
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
