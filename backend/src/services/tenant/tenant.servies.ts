import AppError from "../../errors/AppError";
import {
  createNewTenant,
  findTenantByUserId,
} from "../../repositories/tenant/tenant.repository";

export const registerTenantService = async (data: any) => {
  const { user_id, company_name, address, phone_number, logo } = data;
  const existingTenant = await findTenantByUserId(user_id);

  if (existingTenant) {
    throw new AppError("Tenant already exist", 400);
  }

  const newTenant = await createNewTenant(
    user_id,
    company_name,
    address,
    phone_number,
    logo
  );

  return newTenant;
};
