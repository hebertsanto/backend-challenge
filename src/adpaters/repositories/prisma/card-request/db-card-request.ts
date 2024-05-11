import { CardRequest, Prisma } from '@prisma/client';
import { prisma } from '../../../../infra/lib/prisma';
import { CardRequestsRepository } from '../../db/card-request/card-request';

export class DbCreateCardRequest implements CardRequestsRepository {
  async request(
    data: Prisma.CardRequestUncheckedCreateInput,
  ): Promise<CardRequest> {
    const createRequest = await prisma.cardRequest.create({
      data: {
        ...data,
      },
    });
    return createRequest;
  }
}
