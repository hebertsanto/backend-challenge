/*
  Warnings:

  - You are about to drop the `Transation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transation" DROP CONSTRAINT "Transation_card_id_fkey";

-- DropTable
DROP TABLE "Transation";

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "ammout" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "accountId" TEXT,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
