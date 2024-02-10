import { prisma } from '../database/prisma';
import { TCard } from '../../helpers/types';

export class PrismaCardsRepository {
  async create({ amount, id_account} : TCard) {
    const create = await prisma.card.create({
      data: {
        amount,
        id_account
      }
    });
    return create;
  }
  async listCardById(id: string) {
    const card = await prisma.card.findUnique({
      where: {
        id: id
      }
    });
    return card;
  }

  async listCards(id: string) {
    const listsOfCards = await prisma.card.findMany({
      where: {
        id_account: id
      },
      include: {
        trasations: true
      }
    });
    return listsOfCards;
  }
}
