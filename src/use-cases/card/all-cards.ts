import { Card } from '@prisma/client';
import { AllCards } from '../../domain/use_cases/cards/all-cards';
import { DbGetAllCards } from '../../adpaters/repositories/prisma/cards/all-cards';

export class GetAllCardsUseCase implements AllCards {
  constructor(private getAllCardsRepository: DbGetAllCards) {}
  async all(id_account: string): Promise<Card[] | null> {
    const allCards = await this.getAllCardsRepository.all(id_account);
    return allCards;
  }
}
