import { CardRequest, StatusCardRequest } from '@prisma/client';

type Request = {
  cardType: string;
  userId: string;
  status: StatusCardRequest;
  deliverdAddress: string;
};

export interface CardRequests {
  request(data: Request): Promise<CardRequest>;
}
