/*
  Warnings:

  - You are about to drop the column `category_id` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `reset_password_expires_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `reset_password_token` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verify_token` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verify_token_expires_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_categories` table. If the table is not empty, all the data it contains will be lost.
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
ALTER TABLE "public"."bookings" ADD COLUMN     "amount" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "paid_at" TIMESTAMP(3),
ADD COLUMN     "proof_image" VARCHAR(255),
ALTER COLUMN "payment_deadline" SET DEFAULT now() + interval '1 hour';

-- AlterTable
ALTER TABLE "public"."properties" DROP COLUMN "category_id",
ADD COLUMN     "deleted_at" TIMESTAMP(0),
ADD COLUMN     "property_category" "public"."PropertyCategory" NOT NULL;

-- AlterTable
ALTER TABLE "public"."rooms" ADD COLUMN     "deleted_at" TIMESTAMP(0);

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "reset_password_expires_at",
DROP COLUMN "reset_password_token",
DROP COLUMN "verify_token",
DROP COLUMN "verify_token_expires_at",
ADD COLUMN     "reset_password_otp" VARCHAR(255),
ADD COLUMN     "verify_otp" VARCHAR(255);

-- DropTable
DROP TABLE "public"."payments";

-- DropTable
DROP TABLE "public"."property_categories";

-- DropEnum
DROP TYPE "public"."PaymentMethod";

-- DropEnum
DROP TYPE "public"."PaymentStatus";
