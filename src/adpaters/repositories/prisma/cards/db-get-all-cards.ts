import { Card } from '@prisma/client';
import { AllCardsRepository } from '../../db/card/all-cards-repository';
import { prisma } from '../../../database/prisma';

export class DbGetAllCards implements AllCardsRepository {
  async all(id_account: string): Promise<Card[] | null> {
    const all = await prisma.card.findMany({
      where: {
        id_account,
      },
    });
    return all;
  }
}
