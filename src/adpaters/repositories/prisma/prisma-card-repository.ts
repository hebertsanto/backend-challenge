import { prisma } from '../../../infra/lib/prisma';
import { Prisma, Card } from '@prisma/client';
import { CardRepository } from '../card-repository';

export class PrismaCardsRepository implements CardRepository {
  public async create(card: Prisma.CardUncheckedCreateInput): Promise<Card> {
    const createCard = await prisma.card.create({
      data: card,
    });
    return createCard;
  }
  public async listCardById(id: string): Promise<Card | null> {
    const card = await prisma.card.findUnique({
      where: {
        id,
      },
    });
    return card;
  }
  public async listCards(id_account: string): Promise<Card[]> {
    const allCardsUser = await prisma.card.findMany({
      where: {
        id_account,
      },
    });
    return allCardsUser;
  }
}
