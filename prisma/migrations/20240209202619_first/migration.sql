-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transation" (
    "id" TEXT NOT NULL,
    "ammout" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,

    CONSTRAINT "Transation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "id_account" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transation" ADD CONSTRAINT "Transation_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
