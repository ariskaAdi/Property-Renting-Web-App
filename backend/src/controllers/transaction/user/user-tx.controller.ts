import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../config/prisma";
<<<<<<< HEAD
<<<<<<< HEAD
import { DateTime } from "luxon";
import AppError from "../../../errors/AppError";
import { getUserById } from "../../../services/user/user.service";
import { UpdateRoomAvailability } from "../../../repositories/transaction/tenant-tx.repository";
import { Prisma } from "../../../../prisma/generated/client";
import { BookingStatus } from "../../../../prisma/generated/client";
=======
import { handleUpload } from "../../../config/cloudinary";
import { DateTime } from "luxon"
import AppError from "../../../errors/AppError";
import { getUserById } from "../../../services/user/user.service";
import { UpdateRoomAvailability } from "../../../repositories/transaction/transaction.repository";
>>>>>>> main
=======
import { DateTime } from "luxon";
import AppError from "../../../errors/AppError";
import { getUserById } from "../../../services/user/user.service";
import {
  findBookingByIdRepository,
  UpdateRoomAvailability,
} from "../../../repositories/transaction/tenant-tx.repository";
import { Prisma } from "../../../../prisma/generated/client";
import { eachDayOfInterval } from "date-fns";
import { BookingStatus } from "../../../../prisma/generated/client";
import { isValidBookingStatus } from "../../../types/transaction/transactions.types";
import {
  checkRoomInventory,
  FindProofImage,
  UpdateBookings,
} from "../../../repositories/transaction/transaction.repository";
import { proofUploadService } from "../../../services/transaction/transaction.service";
import { getFilteredBookings } from "../../../repositories/transaction/user-tx.repository";

type Booking = Prisma.bookingsGetPayload<{}>;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

class UserTransactions {
  public createBooking = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const role = res.locals.decrypt;

      const userId = role.userId;
      console.log("userId from token:", userId);
      const user = await getUserById(userId);

      if (!user) {
        throw new AppError("User not found", 404);
=======
      // Validate role
      const decrypt = res.locals.decrypt

      if (!decrypt || !decrypt.userId) {
        throw new AppError("Unauthorized access", 401)
      }

      const userId = decrypt.userId
      console.log("userId from token:", userId)

      const user = await getUserById(userId)

      if (!user) {
        throw new AppError("User not found", 404)
>>>>>>> main
      }

      // Validating fields
=======
      const role = res.locals.decrypt;

      const userId = role.userId;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
      const {
        propertyId,
        checkInDate,
        checkOutDate,
        roomId,
        guests,
        nights,
        totalPrice,
        subtotal,
<<<<<<< HEAD
<<<<<<< HEAD
        quantity,
      } = req.body;

      if (!property_id || !check_in_date || !check_out_date) {
        throw new AppError("Please enter the required fields", 400);
=======
        quantity
      } = req.body;

      if (!property_id || !check_in_date || !check_out_date) {
        throw new AppError("Please enter the required fields", 400)
>>>>>>> main
      }

      // Checking Room Availability
      const conflict_dates = await prisma.room_availability.findMany({
        where: {
          room_id,
          date: {
            gte: new Date(check_in_date),
            lt: new Date(check_out_date),
          },
          is_available: false,
        },
      });

      if (conflict_dates.length > 0) {
<<<<<<< HEAD
        throw new AppError("Room is not available", 409);
=======
        throw new AppError("Room is not available", 409)
>>>>>>> main
      }

      await prisma.$transaction(async (tx) => {
=======
        quantity,
        fullName,
        email,
      } = req.body;

      if (!propertyId || !checkInDate || !checkOutDate || !guests) {
        throw new AppError("Please enter the required fields", 400);
      }

      const newBooking: Booking = await prisma.$transaction(async (tx) => {
        const availableRooms = await checkRoomInventory(
          tx,
          roomId,
          checkInDate,
          checkOutDate,
          quantity
        );

>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
        // Create Booking Property
        const createBooking = await tx.bookings.create({
          data: {
<<<<<<< HEAD
            status: "waiting_payment",
            check_in_date: new Date(check_in_date),
            check_out_date: new Date(check_out_date),
            total_price: total_price,
            amount: total_price,
=======
            status: "waiting_confirmation",
            check_in_date: new Date(checkInDate),
            check_out_date: new Date(checkOutDate),
            total_price: totalPrice,
            amount: totalPrice,
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
            user: {
              connect: { id: userId },
            },
            property: {
              connect: { id: propertyId },
            },
            booking_rooms: {
              create: {
                room_id: roomId,
                guests_count: guests,
                price_per_night: subtotal,
                check_in_date: new Date(checkInDate),
                check_out_date: new Date(checkOutDate),
                quantity: Number(quantity),
                nights: nights,
                subtotal: subtotal,
              },
            },
          },
        });

<<<<<<< HEAD
        // Create Booking Room
        await tx.booking_rooms.create({
          data: {
            booking_id: newBookings.id,
            room_id: room_id,
            guests_count: guests_count,
            price_per_night: price_per_night,
<<<<<<< HEAD
            check_in_date: new Date(check_in_date),
            check_out_date: new Date(check_out_date),
=======
            check_in_date: check_in_date,
            check_out_date: check_out_date,
>>>>>>> main
            quantity: quantity,
            nights: nights,
            subtotal: subtotal,
          },
=======
        const datesToUpdate = eachDayOfInterval({
          start: new Date(checkInDate),
          end: new Date(checkOutDate),
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
        });
        datesToUpdate.pop();

<<<<<<< HEAD
        // Update availability
        await tx.room_availability.updateMany({
          where: {
            room_id: room_id,
            date: {
              gte: new Date(check_in_date),
              lt: new Date(check_out_date),
            },
          },
          data: {
            is_available: false,
          },
        });

        // 1 Hour Timer
        const bookingDate = newBookings.created_at;
        const expired = DateTime.fromJSDate(bookingDate).plus({ hours: 1 });
=======
        await Promise.all(
          datesToUpdate.map((date) =>
            tx.room_availability.upsert({
              where: {
                room_id_date: {
                  room_id: roomId,
                  date: date,
                },
              },
              update: {
                is_available: true,
              },
              create: {
                room_id: roomId,
                date: date,
                is_available: false,
              },
            })
          )
        );

        return createBooking;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
      });

      // Send Response
      res.status(201).json({
        success: true,
        message: "Booking successfully created.",
        identity: {
          fullName: fullName,
          email: email,
        },
        data: newBooking,
      });
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(error);
=======
>>>>>>> main
=======
      console.log(error);
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
      next(error);
    }
  };

  public getReservations = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const { status, check_in_date, check_out_date, sort } = req.query;
      const { bookingId } = req.params
      const userId = res.locals.decrypt.userId;
      console.log("userId from token:", userId);

      // Default Filter
      const whereClause: Prisma.bookingsWhereInput = {
        user_id: userId,
      };

      // Status Filter
      if (status && typeof status === "string") {
        whereClause.status = status as BookingStatus;
=======
      // Validate Role
      const decrypt = res.locals.decrypt
=======
      const {
        status,
        check_in_date: startDate,
        check_out_date: endDate,
        sort,
        bookingId,
      } = req.query;
      const userId = res.locals.decrypt.userId;
      console.log("userId from token:", userId);
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

      let page = 1;
      let limit = 5;

      if (req.query.page && typeof req.query.page === "string") {
        const parsedPage = parseInt(req.query.page, 10);
        if (!isNaN(parsedPage) && parsedPage > 0) {
          page = parsedPage;
        }
      }

<<<<<<< HEAD
      const userId = decrypt.userId
      console.log("userId from token:", userId)
      const user = await getUserById(userId)

      if (!user) {
        throw new AppError("User not found", 404);
>>>>>>> main
      }

      // Date Filter
      if (
        check_in_date &&
        typeof check_in_date === "string" &&
        check_out_date &&
        typeof check_out_date === "string"
      ) {
        const start = new Date(check_in_date);
        const end = new Date(check_out_date);

        // Check Date Validity
        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
          whereClause.check_in_date = { gte: start };
          whereClause.check_out_date = { lt: end };
        }
      }

        // Booking ID Filter
        if (bookingId && typeof bookingId === "string") {
          whereClause.id = bookingId;
        }

      const bookings = await prisma.bookings.findMany({
        where: whereClause,
        orderBy: {
          created_at: sort === 'asc' ? 'asc' : 'desc'
        },
        select: {
          id: true,
          check_in_date: true,
          check_out_date: true,
          booking_rooms: {
            select: {
              id: true,
              room_id: true,
              guests_count: true,
              nights: true,
              price_per_night: true,
              subtotal: true,
            },
          },
<<<<<<< HEAD
          property: {
=======
        },
      });
=======
      if (req.query.limit && typeof req.query.limit === "string") {
        const parsedLimit = parseInt(req.query.limit, 10);
        if (!isNaN(parsedLimit) && parsedLimit > 0) {
          limit = parsedLimit;
        }
      }

      // Default Filter
      const whereClause: Prisma.bookingsWhereInput = {
        user_id: userId,
      };
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

      // Booking ID Filter
      if (bookingId && typeof bookingId === "string") {
        whereClause.id = {
          startsWith: bookingId,
          mode: "insensitive",
        };
      }

      // Status Filter
      if (status) {
        const statusList = [].concat(status as any);
        const validStatus = statusList.filter((s) => isValidBookingStatus(s));
        if (validStatus.length > 0) {
          whereClause.status = { in: validStatus };
        }
      }

      // Date Filter
      if (
        startDate &&
        typeof startDate === "string" &&
        endDate &&
        typeof endDate === "string"
      ) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Check Date Validity
        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
          whereClause.check_in_date = { gte: start };
          whereClause.check_out_date = { lt: end };
        }
      }

<<<<<<< HEAD
      const bookings = await prisma.bookings.findMany({
        where: {
          user_id: user.id,
          check_in_date: { gte: new Date(check_in_date) },
          check_out_date: { lte: new Date(check_out_date) },
        },
        select: {
          id: true,
          check_in_date: true,
          check_out_date: true,
          booking_rooms: {
>>>>>>> main
            select: {
              name: true,
              main_image: true,
              city: true
            }
          },
          status: true

        },
      });

      if (!bookings || bookings.length === 0) {
<<<<<<< HEAD
        throw new AppError("No reservations found", 404);
=======
        throw new AppError("No reservations found", 404)
>>>>>>> main
      }

      res.status(200).json({
        success: true,
        message: "Reservations successfully fetched.",
        data: bookings,
      });
    } catch (err) {
      next(err);
    }
  };

<<<<<<< HEAD
=======
  public getReservationsByOrderNo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { booking_id } = req.params;

      // Validate Role
      const decrypt = res.locals.decrypt

      if (!decrypt || !decrypt.userId) {
        throw new AppError("Unauthorized access", 401)
      }

      const userId = decrypt.userId
      console.log("userId from token:", userId)

      const user = await getUserById(userId)

      if (!user) {
        throw new AppError("User not found", 404)
      }

      const bookings = await prisma.bookings.findMany({
        where: {
          user_id: user.id,
          id: booking_id,
        },
        select: {
          id: true,
          check_in_date: true,
          check_out_date: true,
          booking_rooms: {
            select: {
              id: true,
              room_id: true,
              guests_count: true,
              nights: true,
              price_per_night: true,
              subtotal: true,
            },
          },
        },
      });

      if (!bookings || bookings.length === 0) {
        throw new AppError("No reservations found", 404)
      }
=======
      const bookings = await getFilteredBookings(
        whereClause,
        sort,
        page,
        limit
      );
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

      res.status(200).json({
        success: true,
        message: "Reservations successfully fetched.",
        data: bookings,
      });
    } catch (err) {
      next(err);
    }
  };
>>>>>>> main

  public getReservationsHistory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate Role
<<<<<<< HEAD
<<<<<<< HEAD
      const decrypt = res.locals.decrypt;

      if (!decrypt || !decrypt.userId) {
        throw new AppError("Unauthorized access", 401);
      }

      const userId = decrypt.userId;
      console.log("userId from token:", userId);
      const user = await getUserById(userId);
=======
      const decrypt = res.locals.decrypt
=======
      const decrypt = res.locals.decrypt;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

      if (!decrypt || !decrypt.userId) {
        throw new AppError("Unauthorized access", 401);
      }

<<<<<<< HEAD
      const userId = decrypt.userId
      console.log("userId from token:", userId)
      const user = await getUserById(userId)
>>>>>>> main

      if (!user) {
        throw new AppError("User not found", 404);
      }
=======
      const userId = decrypt.userId;
      console.log("userId from token:", userId);
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

      const bookings = await prisma.bookings.findMany({
        where: {
          user_id: userId,
          check_out_date: {
            lt: new Date(),
          },
        },
        select: {
          id: true,
          check_in_date: true,
          check_out_date: true,
          booking_rooms: {
            select: {
              id: true,
              room_id: true,
              guests_count: true,
              nights: true,
              price_per_night: true,
              subtotal: true,
            },
          },
        },
        orderBy: {
          check_out_date: "desc",
        },
      });

      if (!bookings || bookings.length === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
        throw new AppError("No reservations found", 404);
=======
        throw new AppError("No reservations found", 404)
>>>>>>> main
=======
        throw new AppError("No reservations found", 404);
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
      }

      res.status(200).json({
        success: true,
        message: "Reservations successfully fetched.",
        data: bookings,
      });
    } catch (err) {
      next(err);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
  public getReservationsByStatus = async (
=======
  public getReservationById = async (
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { bookingId } = req.params;
      const user = res.locals.decrypt;

      const booking = await findBookingByIdRepository(bookingId, user);

      if (!booking) {
        throw new AppError(
          "Booking not found or you are not authorized to view it.",
          404
        );
      }

      res.status(200).json({
        message: "Booking retrieved successfully",
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  };
>>>>>>> main

  public paymentProofUpload = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate Role
<<<<<<< HEAD
<<<<<<< HEAD
      const decrypt = res.locals.decrypt;

      if (!decrypt || !decrypt.userId) {
        throw new AppError("Unauthorized access", 401);
      }

      const userId = decrypt.userId;
      console.log("userId from token:", userId);

      const user = await getUserById(userId);

      if (!user) {
        throw new AppError("User not found", 404);
=======
      const decrypt = res.locals.decrypt
=======
      const decrypt = res.locals.decrypt;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

      if (!decrypt || !decrypt.userId) {
        throw new AppError("Unauthorized access", 401);
      }

<<<<<<< HEAD
      const userId = decrypt.userId
      console.log("userId from token:", userId)

      const user = await getUserById(userId)

      if (!user) {
        throw new AppError("User not found", 404)
>>>>>>> main
      }

      // Upload
      if (!req.file) {
<<<<<<< HEAD
        throw new AppError("No file uploaded.", 400);
=======
        throw new AppError("No file uploaded.", 400)
>>>>>>> main
      }
      // const b64 = Buffer.from(req.file.buffer).toString("base64");
      // let dataURI = "data:" + req.file.mimetype + ";base64," + b64; // Must be converted to base64 data URI since Cloudinary cannot handle raw Node.js buffer
      // const cldRes = await handleUpload(dataURI); // This syntax is much more simpler than using Streamifier, but the downside is base64 consumes 33% more memory.
      // const final_img = cldRes?.secure_url;
=======
      const userId = decrypt.userId;
      console.log("userId from token:", userId);

      // Upload
      if (!req.file) {
        throw new AppError("No file uploaded.", 400);
      }
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

      const { bookingId } = req.params;

<<<<<<< HEAD
      await prisma.bookings.update({
        where: {
          id: booking_id,
        },
        data: {
          // proof_image: final_img,
        },
      });
=======
      const response = await proofUploadService(userId, bookingId, req.file);
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

      res.status(200).json({
        success: true,
        message: "Upload payment proof successful.",
<<<<<<< HEAD
        // data: cldRes,
=======
        data: response,
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
      });
    } catch (err) {
      next(err);
    }
  };

  public cancelPayment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id: bookingId } = req.params;

      if (!bookingId) {
        throw new AppError("Invalid transaction ID", 400);
      }

      const proof = await FindProofImage(bookingId);

      if (proof.proof_image) {
        console.log(
          "Proof image exists, cannot cancel booking:",
          proof.proof_image
        );
        return;
      } else {
        console.log(
          "Booking exists, but a proof image has not been uploaded yet."
        );

        console.log("proof image is:", proof);

        // Update Status to Canceled
        const cancelledBooking = await UpdateBookings(bookingId, "canceled");

        res.json({
          message: "Payment canceled by Tenant, booking updated",
          data: cancelledBooking,
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

<<<<<<< HEAD
<<<<<<< HEAD
export default UserTransactions;
=======

export default UserTransactions
>>>>>>> main
=======
export default UserTransactions;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
