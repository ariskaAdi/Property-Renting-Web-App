import { z } from "zod";
import { PropertyCategory } from "@/types/property/property";

export const createPropertySchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  province: z.string().min(2, "Province is required"),
  zip_code: z.string().min(5, "Zip code must be at least 5 characters"),
  latitude: z.string().nonempty("Latitude is required"),
  longitude: z.string().nonempty("Longitude is required"),
  main_image: z
    .instanceof(File, { message: "Main image is required" })
    .refine((file) => file.size > 0, "Image cannot be empty")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
      "Only jpg or png images are allowed"
    ),
  property_category: z.nativeEnum(PropertyCategory),
});

export type CreatePropertySchema = z.infer<typeof createPropertySchema>;
