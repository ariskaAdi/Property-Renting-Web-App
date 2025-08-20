import { prisma } from "../../config/prisma";

export const findTenantByUserId = async (user_id: string) => {
  return prisma.tenants.findUnique({
    where: { user_id },
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
