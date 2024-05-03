import { Card } from '@prisma/client';
import { DbGetCardById } from '../../adpaters/repositories/prisma/cards/db-get-card-by-id';
import { GetCardByIdRepository } from '../../adpaters/repositories/db/card/get-card-by-id-repository';

export class GetCardByIdUseCase implements GetCardByIdRepository {
  constructor(private getCardByIdRepository: DbGetCardById) {}
  async findById(card_id: string): Promise<Card | null> {
    const allCards = await this.getCardByIdRepository.findById(card_id);
    return allCards;
  }
}
