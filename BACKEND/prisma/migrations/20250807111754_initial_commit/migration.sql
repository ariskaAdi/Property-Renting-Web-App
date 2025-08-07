-- CreateEnum
CREATE TYPE "public"."account_role" AS ENUM ('USER', 'TENANT');

-- CreateEnum
CREATE TYPE "public"."trx_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "public"."account_table" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "public"."account_role" NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."transaction_table" (
    "id" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "properties_id" INTEGER NOT NULL,
    "booking_date_start" TIMESTAMP(3) NOT NULL,
    "booking_date_end" TIMESTAMP(3) NOT NULL,
    "payment_proof_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transaction_status" "public"."trx_status" NOT NULL,

    CONSTRAINT "transaction_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."properties_table" (
    "id" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "room_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "properties_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."room_table" (
    "id" SERIAL NOT NULL,
    "properties_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "room_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_review" (
    "id" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "properties_id" INTEGER NOT NULL,
    "transaction_id" INTEGER NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "user_review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."booked_user_list" (
    "id" SERIAL NOT NULL,
    "transaction_id" INTEGER NOT NULL,
    "account_id" INTEGER NOT NULL,
    "properties_id" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "booking_date_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booked_user_list_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_table_username_key" ON "public"."account_table"("username");

-- CreateIndex
CREATE UNIQUE INDEX "account_table_email_key" ON "public"."account_table"("email");

-- AddForeignKey
ALTER TABLE "public"."transaction_table" ADD CONSTRAINT "transaction_table_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "public"."account_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transaction_table" ADD CONSTRAINT "transaction_table_properties_id_fkey" FOREIGN KEY ("properties_id") REFERENCES "public"."properties_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."properties_table" ADD CONSTRAINT "properties_table_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "public"."account_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_review" ADD CONSTRAINT "user_review_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "public"."account_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_review" ADD CONSTRAINT "user_review_properties_id_fkey" FOREIGN KEY ("properties_id") REFERENCES "public"."properties_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_review" ADD CONSTRAINT "user_review_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."transaction_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."booked_user_list" ADD CONSTRAINT "booked_user_list_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "public"."account_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."booked_user_list" ADD CONSTRAINT "booked_user_list_properties_id_fkey" FOREIGN KEY ("properties_id") REFERENCES "public"."properties_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."booked_user_list" ADD CONSTRAINT "booked_user_list_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "public"."transaction_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
