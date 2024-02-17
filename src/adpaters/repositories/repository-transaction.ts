import { Transation, Prisma } from '@prisma/client';

export interface TransactionRepository{
  create(data: Prisma.TransationUncheckedCreateInput): Promise<Transation>
  findTransactionById(id: string): Promise<Transation | null>
  listTransactions(card_id : string): Promise<Transation[]>
}
