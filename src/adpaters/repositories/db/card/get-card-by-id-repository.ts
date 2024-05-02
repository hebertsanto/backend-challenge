import { Card } from '@prisma/client';

export interface getCardByIdRepository {
  all(id_account: string): Promise<Card[]>;
}
