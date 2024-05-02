import { Card } from '@prisma/client';
import { AddCard } from '../../domain/use_cases/cards/add-card';
import { DbAddCard } from '../../adpaters/repositories/prisma/cards/db-add-card';
import { DbGetAccountById } from '../../adpaters/repositories/prisma/account/db-find-account-by-id';
import { NotFoundResource } from '../../helpers/error';

export class AddCardUseCase implements AddCard {
  constructor(
    private addCardRepository: DbAddCard,
    private findAccountByIdRepository: DbGetAccountById,
  ) {}
  async add(amount: number, id_account: string): Promise<Card> {
    const accountExists =
      await this.findAccountByIdRepository.findById(id_account);

    if (!accountExists) {
      throw new NotFoundResource('id_account');
    }

    const createCard = await this.addCardRepository.add({ amount, id_account });

    return createCard;
  }
}
