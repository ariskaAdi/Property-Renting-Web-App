import { prisma } from "../../config/prisma";
import { RoomsType } from "../../types/rooms/rooms.types";

export const createRoomRepository = async (data: RoomsType) => {
  return await prisma.rooms.create({
    data: {
      property_id: data.property_id,
      name: data.name,
      description: data.description,
      base_price: data.base_price,
      capacity: data.capacity,
      image: data.image,
      total_rooms: data.total_rooms,
      room_images: {
        create: data.room_images || [],
      },
    },
    include: { room_images: true },
  });
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

export const getRoomByPropertyAndNameRepository = async (
  propertyname: string,
  roomname: string
) => {
  return await prisma.rooms.findMany({
    where: {
      AND: [
        propertyname
          ? {
              property: {
                name: {
                  contains: String(propertyname),
                  mode: "insensitive",
                },
              },
            }
          : {},
        roomname
          ? {
              name: {
                contains: String(roomname),
                mode: "insensitive",
              },
            }
          : {},
      ],
    },
    include: {
      property: true,
      room_images: true,
    },
  });
};

export const findRoomByIdRepository = async (id: string) => {
  return await prisma.rooms.findUnique({
    where: { id },
  });
};

export const deleteRoomByIdRepository = async (id: string) => {
  return await prisma.rooms.delete({
    where: { id },
  });
};
