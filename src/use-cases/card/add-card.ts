import { Card } from '@prisma/client';
import { AddCard } from '../../domain/use_cases/cards/add-card';
import { DbAddCard } from '../../adpaters/repositories/prisma/cards/db-add-card';
import { DbGetAccountById } from '../../adpaters/repositories/prisma/account/db-find-account-by-id';
import { MissingParamError, NotFoundResource } from '../../helpers/error';

interface ValidateParamsAddCard {
  validateRequest(amount: number, id_account: string): void;
}

export class AddCardUseCase implements AddCard, ValidateParamsAddCard {
  constructor(
    private addCardRepository: DbAddCard,
    private findAccountByIdRepository: DbGetAccountById,
  ) {}

  async add(amount: number, id_account: string): Promise<Card> {
    this.validateRequest(amount, id_account);
    const accountExists =
      await this.findAccountByIdRepository.findById(id_account);

    if (!accountExists) {
      throw new NotFoundResource('id_account');
    }

    const createCard = await this.addCardRepository.add({ amount, id_account });

    return createCard;
  }

  public validateRequest(amount: number, id_account: string): void {
    if (!amount) throw new MissingParamError('amount');
    if (!id_account) throw new MissingParamError('id_account');
  }
}
