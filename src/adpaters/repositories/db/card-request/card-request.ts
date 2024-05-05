import { CardRequest, StatusCardRequest } from '@prisma/client';

type Request = {
  cardType: string;
  userId: string;
  status: StatusCardRequest;
  deliveryAddress: string;
};

export interface CardRequestsRepository {
  request(data: Request): Promise<CardRequest>;
}
