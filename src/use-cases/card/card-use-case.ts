import { Card } from '@prisma/client';
import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { TCard } from '../../helpers/types';
import { CreateAccountUseCase } from '../account/create-account-use-case';
import { MissingParamError, NotFoundResource } from '../../helpers/error';

export class CreateCardUseCase {
  constructor(
    private cardRepository: PrismaCardsRepository,
    private accountService: CreateAccountUseCase,
  ) {}

  async create({ amount, id_account }: TCard): Promise<Card> {
    if (!amount) {
      throw new MissingParamError('amount');
    }
    if (!id_account) {
      throw new MissingParamError('id_account');
    }
    await this.accountService.checkAccountExistence(id_account);

    const createCard = await this.cardRepository.create({
      amount,
      id_account,
    });
    return createCard;
  }

  async listAllCards(id_account: string): Promise<Card[]> {
    if (!id_account) {
      throw new MissingParamError('id');
    }

    const account = await this.accountService.checkAccountExistence(id_account);

    if (!account) {
      throw new NotFoundResource('id_account');
    }
    const cards = await this.cardRepository.listCards(id_account);

    return cards;
  }

  async listCard(card_id: string) {
    if (!card_id) {
      throw new MissingParamError('card_id');
    }

    const card = await this.cardRepository.listCardById(card_id);
    if (!card) {
      throw new NotFoundResource('card_id');
    }
    return card;
  }
}
