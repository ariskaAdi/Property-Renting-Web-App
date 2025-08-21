import { PropertyCategory } from "../../../prisma/generated/client";
import { prisma } from "../../config/prisma";
import { PropertyTypes } from "../../types/property/property.types";

export const getAllPropertiesRepository = async (filters: {
  property_category?: string;
}) => {
  const { property_category } = filters;

  return prisma.properties.findMany({
    where: {
      property_category: property_category
        ? (property_category as PropertyCategory)
        : undefined,
    },
    orderBy: { created_at: "desc" },
  });
};

export const getPropertyByIdRepository = async (propertyId: string) => {
  return prisma.properties.findUnique({
    where: { id: propertyId },
    include: {
      property_images: true,
      reviews: true,
      rooms: {
        include: {
          room_images: true,
          room_availability: true,
        },
      },
    },
  });
};

export const findPropertyByIdRepository = async (id: string) => {
  return prisma.properties.findUnique({
    where: { id },
  });
};

export const createPropertyRepository = async (data: PropertyTypes) => {
  return prisma.properties.create({
    data,
  });
};
