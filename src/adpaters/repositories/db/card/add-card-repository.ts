import { Card, Prisma } from '@prisma/client';

export interface AddCardRepository {
  add(data: Prisma.CardUncheckedCreateInput): Promise<Card>;
}
