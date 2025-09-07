import { prisma } from "../../config/prisma";
import { RoomsType } from "../../types/rooms/rooms.types";
import { Decimal } from "@prisma/client/runtime/library";
import dayjs from "../../utils/dayjs"; // atau path sesuai projectmu

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

export const createRoomAvailability = async (room_id: string, months = 6) => {
  const today = dayjs();
  const endDate = today.add(months, "month");
  const availabilityData = [];

  for (let date = today; date.isBefore(endDate); date = date.add(1, "day")) {
    availabilityData.push({
      room_id,
      date: date.toDate(),
      is_available: true,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  return await prisma.room_availability.createMany({
    data: availabilityData,
    skipDuplicates: true,
  });
};

// buat harga sesuai peak season

export const getRoomDefaultAvailabilityWithPriceRepository = async (
  room_id: string,
  weekend_peak?: { type: "percentage" | "nominal"; value: number }
) => {
  const room = await prisma.rooms.findUnique({
    where: { id: room_id },
    include: { room_availability: true },
  });

  if (!room) return [];

  const base_price = new Decimal(room.base_price);

  const availabilityWithPrice = room.room_availability.map((item) => {
    const day = dayjs(item.date).day(); // 0 = Minggu, 6 = Sabtu
    let price = base_price;

    if (day === 0 || day === 6) {
      if (weekend_peak) {
        price =
          weekend_peak.type === "percentage"
            ? base_price.plus(base_price.mul(weekend_peak.value).div(100))
            : base_price.plus(new Decimal(weekend_peak.value));
      } else {
        price = base_price; // 👉 tetap harga normal
      }
    }

    return {
      ...item,
      price: price.toNumber(),
    };
  });

  return availabilityWithPrice;
};

// get room berdan availability
export const getRoomAvailabilityWithPriceRepository = async (
  room_id: string,
  checkIn: string,
  checkOut: string,
  weekend_peak?: { type: "percentage" | "nominal"; value: number }
) => {
  const startDate = dayjs(checkIn).toDate();
  const endDate = dayjs(checkOut).toDate();

  // Ambil room + peak season
  const room = await prisma.rooms.findUnique({
    where: { id: room_id },
    include: { peak_season_rates: true },
  });

  if (!room) return [];

  // Ambil availability hanya dalam range
  const availabilities = await prisma.room_availability.findMany({
    where: {
      room_id,
      date: { gte: startDate, lt: endDate },
    },
    orderBy: { date: "asc" },
  });

  const base_price = new Decimal(room.base_price);
  let total = new Decimal(0);

  const availabilityWithPrice = availabilities.map((item) => {
    const day = dayjs(item.date).day();
    let price = base_price;

    // ✅ cek peak season
    const peak = room.peak_season_rates.find(
      (rate) =>
        dayjs(item.date).isSameOrAfter(rate.start_date, "day") &&
        dayjs(item.date).isSameOrBefore(rate.end_date, "day")
    );

    if (peak) {
      price =
        peak.price_change_type === "percentage"
          ? base_price.plus(base_price.mul(peak.price_change_value).div(100))
          : base_price.plus(new Decimal(peak.price_change_value));
    } else if ((day === 0 || day === 6) && weekend_peak) {
      // ✅ cek weekend peak
      price =
        weekend_peak.type === "percentage"
          ? base_price.plus(base_price.mul(weekend_peak.value).div(100))
          : base_price.plus(new Decimal(weekend_peak.value));
    }

    total = total.plus(price);

    return {
      ...item,
      price: price.toNumber(),
    };
  });

  return {
    dates: availabilityWithPrice,
    total: total.toNumber(),
  };
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
  roomname: string,
  checkIn?: string,
  checkOut?: string
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
        checkIn && checkOut
          ? {
              room_availability: {
                some: {
                  date: {
                    gte: new Date(checkIn),
                    lt: new Date(checkOut),
                  },
                  is_available: true,
                },
              },
            }
          : {},
      ],
    },
    include: {
      property: true,
      room_images: true,
      room_availability:
        checkIn && checkOut
          ? {
              where: {
                date: {
                  gte: new Date(checkIn),
                  lt: new Date(checkOut),
                },
                is_available: true,
              },
              orderBy: { date: "asc" },
            }
          : false,
      peak_season_rates:
        checkIn && checkOut
          ? {
              where: {
                start_date: { lte: new Date(checkOut) },
                end_date: { gte: new Date(checkIn) },
              },
            }
          : true,
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
