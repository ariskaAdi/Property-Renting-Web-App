import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../config/prisma";
import AppError from "../../../errors/AppError";
import {
  findBookingRoomsByBookingId,
  FindProofImage,
  OverlappingBooking,
  UpdateBookings,
  UpdateRoomAvailability,
  ValidateBooking,
} from "../../../repositories/transaction/transaction.repository";
import { getEmailAndFullnameById } from "../../../repositories/user/user.respository";
import {
  availableRooms,
  scheduleReminder,
  sendRejectionNotification,
  sendUserBookingConfirmation,
} from "../../../services/transaction/transaction.service";

class TenantTransactions {
  public acceptPayment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate Role
      const decrypt = res.locals.decrypt;

      if (!decrypt || decrypt.role !== "tenant") {
        throw new AppError("Unauthorized access", 401);
      }

      // Validate Transaction ID

      const transactionId = req.params.id;

      if (!transactionId) {
        throw new AppError("Invalid transaction ID", 400);
      }

      // Batch Query Accept Transaction

      const bookingProcess = await prisma.$transaction(async (tx) => {
        // Validate Property --> repository selects property key
        await ValidateBooking(transactionId, decrypt.userId, tx);

        // Update booking and Return UserID

        const userID = await UpdateBookings(transactionId, "confirmed", tx);

        // Validate user

        await getEmailAndFullnameById(userID);

        // Find rooms
        const findRooms = await findBookingRoomsByBookingId(transactionId, tx);

        // Finding overlapping booking from date, room_id, and booking status
        const overlappingBooking = await OverlappingBooking(transactionId, tx);

        // Calculating room availability based on dates and room

        const availability = availableRooms(findRooms, overlappingBooking, tx);

        return {
          userID,
          findRooms,
          availability,
        };
      });

      // Send Booking Confirmation
      await sendUserBookingConfirmation(
        transactionId,
        bookingProcess.userID,
        bookingProcess.findRooms
      );

      // Scheduling Reminder
      await scheduleReminder(transactionId);

      res.json({
        message: "Payment successful, booking created",
        availability: bookingProcess.availability,
      });
    } catch (error) {
      next(error);
    }
  };

  public rejectPayment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate Role
      const decrypt = res.locals.decrypt;

      if (!decrypt || decrypt.role !== "tenant") {
        throw new AppError("Unauthorized access", 401);
      }

      // Validate Transaction ID

      const transactionId = req.params.id;

      if (!transactionId) {
        throw new AppError("Invalid transaction ID", 400);
      }

      const rejectProcess = await prisma.$transaction(async (tx) => {
        // Validate Property --> repository selects property key
        await ValidateBooking(transactionId, decrypt.userId, tx);

        // Update booking and Return UserID

        const userID = await UpdateBookings(
          transactionId,
          "waiting_payment",
          tx
        );

        // Validate user
        const user = await getEmailAndFullnameById(userID);

        // Update Availability
        await UpdateRoomAvailability(
          userID.booking_rooms.room_id,
          userID,
          true,
          tx
        );

        return { userID, user };
      });

      // Send Rejection Notification
      await sendRejectionNotification(transactionId, rejectProcess.userID);

      res.json({
        message: "Payment rejected, booking updated",
        userID: rejectProcess.userID,
      });
    } catch (error) {
      next(error);
    }
  };

  public cancelPayment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate Role
      const decrypt = res.locals.decrypt;

      if (!decrypt || decrypt.role !== "tenant") {
        throw new AppError("Unauthorized access", 401);
      }

      // Validate Transaction

      const transactionId = req.params.id;

      if (!transactionId) {
        throw new AppError("Invalid transaction ID", 400);
      }

      // Find Payment Proof
      await FindProofImage(transactionId)

      // Update Status to Canceled
      const cancelledBooking = await UpdateBookings(transactionId, "canceled");

      // Send Response
      res.json({
        message: "Payment canceled by Tenant, booking updated",
        data: cancelledBooking
      });
    } catch (error) {
        next(error)
    }
  };
}

export default TenantTransactions;
