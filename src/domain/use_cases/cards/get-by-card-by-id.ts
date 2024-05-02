import { Card } from '@prisma/client';

export interface findCardById {
  listCardById(card_id: string): Promise<Card | null>;
}
