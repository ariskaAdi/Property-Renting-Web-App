import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../config/prisma-config";

class UserTransactions {
  public reservation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate role
      const user = res.locals.user;

      if (!user) {
        res
          .status(403)
          .json({ message: "Only users are allowed to access this feature." });
        return;
      }

      // Validating fields
      const {
        property_id,
        check_in_date,
        check_out_date,
        room_id,
        is_available,
        guests_count,
        nights,
        total_price,
        price_per_night,
        subtotal,
      } = req.body;

      if (!property_id || !check_in_date || !check_out_date) {
        res.status(400).json({ message: "Please enter the required fields." });
        return;
      }

      // Checking Room Availability
      const roomAvailability = await prisma.room_availability.findUnique({
        where: {
          id: req.params.id, // ! Make sure the route includes id in its path
          room_id: room_id,
          is_available: true,
        },
      });

      if (!roomAvailability) {
        res.status(409).json({ message: "Room is not available" });
        return;
      }

      const transaction = await prisma.$transaction(async (tx) => {
        // Create Booking Property
        const newBookings = await tx.bookings.create({
          data: {
            user_id: user.id,
            property_id: property_id,
            status: "waiting_payment",
            check_in_date: check_in_date,
            check_out_date: check_out_date,
            total_price: total_price,
          },
        });

        // Create Booking Room
        await tx.booking_rooms.create({
          data: {
            booking_id: newBookings.id,
            room_id: room_id,
            guests_count: guests_count,
            price_per_night: price_per_night,
            nights: nights,
            subtotal: subtotal,
          },
        });
      });

      // Send Response
      res.status(200).json({
        message: "Booking successfully created.",
      });
    } catch (err) {
        res.status(500).json({message: "An error has occurred."})
        console.log(err)
    }
  };
}
