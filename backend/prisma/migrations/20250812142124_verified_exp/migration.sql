/*
  Warnings:

  - You are about to drop the column `category_id` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `reset_password_expires_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `reset_password_token` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verify_token` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verify_token_expires_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_categories` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[room_id,date]` on the table `room_availability` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_category` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."PropertyCategory" AS ENUM ('apartment', 'house', 'villa', 'hotel', 'hostel', 'guesthouse');

-- DropForeignKey
ALTER TABLE "public"."payments" DROP CONSTRAINT "payments_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."properties" DROP CONSTRAINT "properties_category_id_fkey";

-- AlterTable
ALTER TABLE "public"."booking_rooms" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."bookings" ADD COLUMN     "amount" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "paid_at" TIMESTAMP(3),
ADD COLUMN     "proof_image" VARCHAR(255),
ALTER COLUMN "payment_deadline" SET DEFAULT (now() + '01:00:00'::interval),
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."peak_season_rates" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."properties" DROP COLUMN "category_id",
ADD COLUMN     "deleted_at" TIMESTAMP(0),
ADD COLUMN     "property_category" "public"."PropertyCategory" NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."property_images" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."reviews" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."room_availability" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."room_images" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."rooms" ADD COLUMN     "deleted_at" TIMESTAMP(0),
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."tenants" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "reset_password_expires_at",
DROP COLUMN "reset_password_token",
DROP COLUMN "verify_token",
DROP COLUMN "verify_token_expires_at",
ADD COLUMN     "reset_password_otp" VARCHAR(6),
ADD COLUMN     "verify_otp" VARCHAR(6),
ADD COLUMN     "verify_otp_expires_at" TIMESTAMP(3),
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "public"."payments";

-- DropTable
DROP TABLE "public"."property_categories";

-- DropEnum
DROP TYPE "public"."PaymentMethod";

-- DropEnum
DROP TYPE "public"."PaymentStatus";

-- CreateIndex
CREATE UNIQUE INDEX "room_availability_room_id_date_key" ON "public"."room_availability"("room_id", "date");
