import { Card } from '@prisma/client';

export interface AddCard {
  add(amount: number, id_account: string): Promise<Card>;
}
