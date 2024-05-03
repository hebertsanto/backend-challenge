import { Card } from '@prisma/client';
import { AllCards } from '../../domain/use_cases/cards/all-cards';
import { DbGetAllCards } from '../../adpaters/repositories/prisma/cards/db-get-all-cards';
import { MissingParamError, NotFoundResource } from '../../infra/helpers/error';

export class GetAllCardsUseCase implements AllCards {
  constructor(private getAllCardsRepository: DbGetAllCards) {}

  async all(id_account: string): Promise<Card[] | null> {
    if (!id_account) throw new MissingParamError('id_account');

    const allCards = await this.getAllCardsRepository.all(id_account);

    if (allCards?.length == 0) throw new NotFoundResource('all_cards');

    return allCards;
  }
}
