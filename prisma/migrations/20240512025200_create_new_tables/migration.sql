/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transation` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusCardRequest" AS ENUM ('PENDING', 'APROVED', 'REJECTD');

-- CreateEnum
CREATE TYPE "StatusAccount" AS ENUM ('CONFIRMED', 'UNCONFIRMED');

-- CreateEnum
CREATE TYPE "TwoFactorStatus" AS ENUM ('ACTIVE', 'NOT_ACTIVATE');

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_id_account_fkey";

-- DropForeignKey
ALTER TABLE "Transation" DROP CONSTRAINT "Transation_card_id_fkey";

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Card";

-- DropTable
DROP TABLE "Transation";

-- CreateTable
CREATE TABLE "users_account" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "cpf" TEXT NOT NULL,
    "password" TEXT,
    "status" "StatusAccount" NOT NULL DEFAULT 'UNCONFIRMED',

    CONSTRAINT "users_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card_request" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cardType" TEXT NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "status" "StatusCardRequest" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "card_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwoFactorAuthentication" (
    "id" TEXT NOT NULL,
    "verification" "TwoFactorStatus" NOT NULL DEFAULT 'NOT_ACTIVATE',

    CONSTRAINT "TwoFactorAuthentication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_account_email_key" ON "users_account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_account_cpf_key" ON "users_account"("cpf");
