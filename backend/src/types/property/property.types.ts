import { $Enums } from "../../../prisma/generated/client";

export type PropertyTypes = {
  tenant_id: string;
  name: string;
  description?: string;
  address: string;
  city: string;
  province: string;
  zip_code: string;
  latitude: number;
  longitude: number;
  main_image?: string;
  property_category: $Enums.PropertyCategory;
};
