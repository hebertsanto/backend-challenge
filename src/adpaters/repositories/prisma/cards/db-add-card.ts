import { Card, Prisma } from '@prisma/client';
import { AddCardRepository } from '../../db/card/add-card-repository';
import { prisma } from '../../../database/prisma';

export class DbAddCard implements AddCardRepository {
  async add(data: Prisma.CardUncheckedCreateInput): Promise<Card> {
    const card = await prisma.card.create({
      data: {
        ...data,
      },
    });
    return card;
  }
}
