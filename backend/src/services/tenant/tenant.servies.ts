import { handleUpload } from "../../config/cloudinary";
import AppError from "../../errors/AppError";
import {
  createNewTenant,
  findTenantByUserId,
  updateTenantRepository,
} from "../../repositories/tenant/tenant.repository";
import { updateTenant } from "../../types/tenant/tenant.types";

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

export const updateTenantProfileServices = async (
  userId: string,
  data: updateTenant,
  file?: Express.Multer.File
) => {
  const { company_name, address, phone_number } = data;

  const existingTenant = await findTenantByUserId(userId);
  if (!existingTenant) {
    throw new AppError("Tenant not found", 404);
  }

  let uploadImage = null;
  if (file) {
    uploadImage = await handleUpload(file);
  }

  const updatedTenant = await updateTenantRepository(existingTenant.id, {
    company_name,
    address,
    phone_number,
    logo: uploadImage?.secure_url || existingTenant.logo,
  });

  return updatedTenant;
};
