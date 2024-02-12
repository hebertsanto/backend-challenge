import { prisma } from '../database/prisma';
import { TCard } from '../../helpers/types';

export class PrismaCardsRepository {
  /**
   *create
   *this method create a new card
   * @param { string } ammount
   * @param { string } id_account - uuid of the card
   * @returns { Promise<TCard> }
   */
  async create({ amount, id_account }: TCard) {
    const create = await prisma.card.create({
      data: {
        amount,
        id_account,
      },
    });
    return create;
  }

  /**
   *listCardById
   *this method find an card by id
   * @param { string } id_account - uuid of the card
   * @returns { Promise<TCard | null> }
   */
  async listCardById(id: string) {
    const card = await prisma.card.findUnique({
      where: {
        id: id,
      },
    });
    return card;
  }

  /**
   *listCards
   *this method find many card of the one account
   * @param { string } id_account - uuid of the account
   * @returns { Promise<TCard | null> }
   */
  async listCards(id: string) {
    const listsOfCards = await prisma.card.findMany({
      where: {
        id_account: id,
      },
      include: {
        trasations: true,
      },
    });
    return listsOfCards;
  }
}
