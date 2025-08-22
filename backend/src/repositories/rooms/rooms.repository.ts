import { prisma } from "../../config/prisma";
import { RoomsType } from "../../types/rooms/rooms.types";

export const createRoomRepository = async (data: RoomsType) => {
  return await prisma.rooms.create({ data });
};

export const findRoomRepository = async (property_id: string) => {
  return await prisma.rooms.findMany({
    where: { property_id },
    include: {
      property: true,
    },
  });
};

export const findAllRoomsRepository = async () => {
  return await prisma.rooms.findMany({
    include: {
      property: true,
    },
  });
};

export const findRoomByIdRepository = async (id: string) => {
  return await prisma.rooms.findUnique({
    where: { id },
  });
};
