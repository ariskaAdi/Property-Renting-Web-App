/*
  Warnings:

  - A unique constraint covering the columns `[room_id,date]` on the table `room_availability` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."bookings" ALTER COLUMN "payment_deadline" SET DEFAULT now() + interval '1 hour';

-- CreateIndex
CREATE UNIQUE INDEX "room_availability_room_id_date_key" ON "public"."room_availability"("room_id", "date");
