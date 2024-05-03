import { Transactions } from '@prisma/client';

export interface GetAllTransactions {
  all(card_id: string): Promise<Transactions[] | null>;
}
