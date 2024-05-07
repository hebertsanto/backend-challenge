import { CardRequest, StatusCardRequest } from '@prisma/client';
import { DbCreateCardRequest } from '../../adpaters/repositories/prisma/card-request/db-card-request';
import { CardRequests } from '../../domain/use_cases/card-request/request-card';
import { DbGetAccountById } from '../../adpaters/repositories/prisma/account/db-find-account-by-id';
import { logger } from '../../infra/helpers/logger';
import { NotFoundResource } from '../../infra/helpers/error';

type CardRequestProps = {
  userId: string;
  cardType: string;
  deliveryAddress: string;
  status: StatusCardRequest;
};

export class CreateCardRequest implements CardRequests {
  constructor(
    private cardRequestsRepository: DbCreateCardRequest,
    private accountRepository: DbGetAccountById,
  ) {}

  async request(data: CardRequestProps): Promise<CardRequest> {
    const user = await this.accountRepository.findById(data.userId);

    if (!user) {
      logger.error(`User not found with id: ${data.userId}`);
      throw new NotFoundResource('User not found');
    }

    const createRequest = await this.cardRequestsRepository.request({
      ...data,
    });
    logger.info(
      'Send notification by email to user about the card request is processing',
    );
    return createRequest;
  }
}
