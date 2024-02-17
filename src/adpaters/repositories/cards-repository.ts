import { prisma } from '../database/prisma';
import { TCard } from '../../helpers/types';
import { Card } from '@prisma/client';

export class PrismaCardsRepository {
  /**
   *create
   *this method create a new card
   * @param { string } ammount
   * @param { string } id_account - uuid of the card
   * @returns { Promise<TCard> }
   */

  async create({ amount, id_account }: TCard) : Promise<Card> {
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
   * @param { string } card_id - uuid of the card
   * @returns { Promise<TCard | null> }
   */
  async listCardById(card_id: string) {
    const card = await prisma.card.findUnique({
      where: {
        id: card_id,
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
  async listCards(id_account: string) {
    const listsOfCards = await prisma.card.findMany({
      where: {
        id_account,
      },
      include: {
        trasations: true,
      },
    });
    return listsOfCards;
  }
}
