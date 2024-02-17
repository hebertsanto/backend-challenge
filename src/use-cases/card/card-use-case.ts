import { Card } from '@prisma/client';
import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { TCard } from '../../helpers/types';
import { CreateAccountUseCase } from '../account/create-account-use-case';
import { MissingParamError, ParamDoesNotExist } from '../../helpers/error';

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

  async listAllCards(id_account: string) {
    const account = await this.accountService.findAccountById(id_account);

    if (!account) {
      throw new ParamDoesNotExist('id_account');
    }
    const cards = await this.cardRepository.listCards(id_account);

    if (!id_account) {
      throw new MissingParamError('id');
    }
    return cards;
  }

  async listCard(card_id: string) {
    const card = await this.cardRepository.listCardById(card_id);
    if (!card) {
      throw new ParamDoesNotExist('card_id');
    }
    if (!card_id) {
      throw new MissingParamError('card_id');
    }
    return card;
  }
}
