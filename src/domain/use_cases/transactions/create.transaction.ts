import { Transactions } from '@prisma/client';

export interface CreateTransaction {
  create(amount: number, card_id: string): Promise<Transactions>;
}
