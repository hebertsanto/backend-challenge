import { Transactions, Prisma } from '@prisma/client';

export interface TransactionRepository {
  create(data: Prisma.TransactionsUncheckedCreateInput): Promise<Transactions>;
  findTransactionById(id: string): Promise<Transactions | null>;
  listTransactions(card_id: string): Promise<Transactions[]>;
}
