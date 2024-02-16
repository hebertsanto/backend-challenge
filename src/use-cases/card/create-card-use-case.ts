import { Card } from '@prisma/client';
import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';
import { TCard } from '../../helpers/types';
import { CreateAccountUseCase } from '../account/create-account-use-case';

export class CreateCardUseCase {
  constructor(
    private cardRepository: PrismaCardsRepository,
    private accountService: CreateAccountUseCase
  ) {}

  /**
   *create
   * @param { string } card
   * @param { string } id_account
   * @returns { Promise<Card>}
   */
  async create({ amount, id_account }: TCard) : Promise<Card> {

    //verify if account exists
    await this.accountService.checkAccountExistence(id_account);

    const createCard = await this.cardRepository.create({
      amount,
      id_account,
    });
    return createCard;
  }
}
