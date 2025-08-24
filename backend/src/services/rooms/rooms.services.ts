import { handleUpload } from "../../config/cloudinary";
import AppError from "../../errors/AppError";
import {
  createRoomRepository,
  deleteRoomByIdRepository,
  findAllRoomsRepository,
  findRoomByIdRepository,
  findRoomRepository,
} from "../../repositories/rooms/rooms.repository";
import { RoomsType } from "../../types/rooms/rooms.types";

export const createRoomService = async (
  data: RoomsType,
  property_id: string,
  file: Express.Multer.File
) => {
  const { name, description, base_price, capacity, total_rooms } = data;
  const existingRoom = await findRoomRepository(property_id);
  if (!existingRoom) {
    throw new AppError("Room not found", 404);
  }
  let uploadImage = null;
  if (file) {
    uploadImage = await handleUpload(file);
  }

  const parsedCapacity = Number(capacity);
  const parsedTotalRoom = Number(total_rooms);
  if (isNaN(parsedCapacity) || isNaN(parsedTotalRoom)) {
    throw new AppError("Invalid capacity", 400);
  }

  const newRoom = await createRoomRepository({
    property_id,
    name,
    description,
    base_price,
    capacity: parsedCapacity,
    image: uploadImage?.secure_url || "",
    total_rooms: parsedTotalRoom,
  });
  return newRoom;
};

export const getRoomsService = async () => {
  const response = await findAllRoomsRepository();
  return response;
};

export const getRoomByIdService = async (id: string) => {
  const existingRoom = await findRoomByIdRepository(id);
  if (!existingRoom) {
    throw new AppError("Room not found", 404);
  }
  const response = await findAllRoomsRepository();
  return response;
};

export const deleteRoomByIdService = async (id: string) => {
  const existingRoom = await findRoomByIdRepository(id);
  if (!existingRoom) {
    throw new AppError("Room not found", 404);
  }
  const response = await deleteRoomByIdRepository(id);
  return response;
};
