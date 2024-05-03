import { Prisma, Transactions } from '@prisma/client';

export interface CreateTransactionRepository {
  add(data: Prisma.TransactionsUncheckedCreateInput): Promise<Transactions>;
}
