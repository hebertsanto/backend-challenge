import { Card } from '@prisma/client';

export interface AllCardsRepository {
  all(id_account: string): Promise<Card[] | null>;
}
