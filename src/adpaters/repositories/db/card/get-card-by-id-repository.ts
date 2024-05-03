import { Card } from '@prisma/client';

export interface GetCardByIdRepository {
  findById(card_id: string): Promise<Card | null>;
}
