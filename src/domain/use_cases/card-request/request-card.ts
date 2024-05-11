import { CardRequest } from '@prisma/client';

export interface CardRequests {
  request(data: CardRequest): Promise<CardRequest>;
}
