import { Transactions } from '@prisma/client';

export interface GetAllTransactionsRepository {
  all(account_id: string): Promise<Transactions[] | null>;
}
