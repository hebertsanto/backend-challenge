import { Card, Prisma } from '@prisma/client';

export interface CardRepository{
  create(card: Prisma.CardUncheckedCreateInput): Promise<Card>
  listCardById(id: string): Promise<Card | null>
  listCards(id_account: string) : Promise<Card[]>
}
