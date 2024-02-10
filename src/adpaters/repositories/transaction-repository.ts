import { prisma } from '../database/prisma';
import { TTransition } from '../../helpers/types';

export class PrismaTransitionRepository {
  async create({ ammout, card_id }: TTransition) {
    const newTransation = await prisma.transation.create({
      data: {
        ammout,
        card_id,
      },
    });

    return newTransation;
  }

  async findTransactionById(id: string) {
    const transition = await prisma.transation.findUnique({
      where: {
        id: id,
      },
    });
    return transition;
  }
  async listTransactions(id: string) {
    const transition = await prisma.transation.findMany({
      where: {
        id: id
      },
    });
    return transition;
  }
}
