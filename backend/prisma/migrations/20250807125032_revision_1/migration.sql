/*
  Warnings:

  - Added the required column `image` to the `account_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires_at` to the `transaction_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `transaction_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `transaction_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `user_review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."account_table" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."transaction_table" ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."user_review" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "rating" INTEGER NOT NULL;
