import { handleUpload } from "../../config/cloudinary";
import AppError from "../../errors/AppError";
import {
  createNewTenant,
  findTenantByEmail,
  findTenantByUserId,
  updateTenantRepository,
} from "../../repositories/tenant/tenant.repository";
import { updateTenant } from "../../types/tenant/tenant.types";

export const registerTenantService = async (
  data: any,
  email: string,
  file?: Express.Multer.File
) => {
  const { company_name, address, phone_number } = data;

  const user = await findTenantByEmail(email);

  const existingTenant = await findTenantByUserId(user!.id);
  if (existingTenant) {
    throw new AppError("Tenant already exist", 400);
  }

  let uploadImage = null;
  if (file) {
    uploadImage = await handleUpload(file);
  }

  const newTenant = await createNewTenant({
    userId: user!.id,
    company_name,
    address,
    phone_number,
    logo: uploadImage?.secure_url || null,
  });

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
