import { Card } from '@prisma/client';
import { prisma } from '../../../../infra/lib/prisma';
import { GetCardByIdRepository } from '../../db/card/get-card-by-id-repository';

export class DbGetCardById implements GetCardByIdRepository {
  async findById(card_id: string): Promise<Card | null> {
    const all = await prisma.card.findUnique({
      where: {
        id: card_id,
      },
    });

    return all;
  }
}
