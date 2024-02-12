import { prisma } from '../database/prisma';
import { TTransaction } from '../../helpers/types';

export class PrismaTransitionRepository {
  /**
   *create
   *this method create a new transaction
   * @param { string } ammout - value of the transaction
   * @param { string } card_id - uuid of the card
   * @returns { Promise<TTransaction> } promisse that resolve a new transaction
   */
  async create({ ammout, card_id }: TTransaction) {
    const newTransation = await prisma.transation.create({
      data: {
        ammout,
        card_id,
      },
    });

    return newTransation;
  }
  /**
   *findTransactionById
   *this method find a transaction by id
   * @param { string } id - uuid of the transaction
   * @returns { Promise<TTransaction> } promisse that resolve a new transaction
   */
  async findTransactionById(id: string) {
    const transition = await prisma.transation.findUnique({
      where: {
        id: id,
      },
    });
    return transition;
  }
  /**
   *listTransactions
   *this method find many transaction of the one card
   * @param { string } card_id - uuid of the card
   * @returns { Promise<TTransaction> } promisse that resolve a new transaction
   */
  async listTransactions(card_id: string) {
    const transition = await prisma.transation.findMany({
      where: {
        card_id: card_id,
      },
    });
    return transition;
  }
}
