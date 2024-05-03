import { Transactions } from '@prisma/client';

export interface GetTransactionById {
  getById(transaction_id: string): Promise<Transactions | null>;
}
