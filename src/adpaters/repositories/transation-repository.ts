
import { prisma } from '../database/prisma';
import { ITransition } from '../../use-cases/transation/create-transation-use-case';

export class PrismaTransitionRepository {

  async create({ ammout, card_id} : ITransition ) {
    const newTransation = await prisma.transation.create({
      data: {
        ammout,
        card_id
      }
    });

    return newTransation;
  }

  async findTransationById(id: string) {
    const transition = await prisma.transation.findUnique({
      where: {
        id: id
      }
    });
    return transition;
  }
  async listTransitions(id: string) {
    const transition = await prisma.transation.findMany({
      where: {
        id: id
      }
    });
    return transition;
  }
}
