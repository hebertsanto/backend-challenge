import { Transactions } from '@prisma/client';

export interface GetTransactionByIdRepository {
  getById(transaction_id: string): Promise<Transactions | null>;
}
