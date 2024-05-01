import { Card } from '@prisma/client';
import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { TCard } from '../../helpers/types';
import { CreateAccountUseCase } from '../account/create-account-use-case';
import { MissingParamError, NotFoundResource } from '../../helpers/error';
import { logger } from '../../helpers/logger';

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

  /**
   * @constructor
   * @description This function returns all cards associated with an account
   * @param {string} id_account - The account ID to get all cards.
   * @returns {Promise<Cards[]| null>} - A promise that resolves to the cards found or null if it does not exist.
   * @throws {MissingParamError} If the provided ID is not a valid string.
   * @throws {NotFoundResource} If account Does not exists.
   * @throws {Error} If an error occurs while get all cards of the account.
   */
  async listAllCards(id_account: string): Promise<Card[] | null> {
    try {
      if (
        !id_account ||
        typeof id_account != 'string' ||
        id_account.trim() == ''
      ) {
        throw new MissingParamError('Must be a valid id');
      }

      await this.accountService.checkAccountExistence(id_account);

      const allCards = await this.cardRepository.listCards(id_account);

      return allCards;
    } catch (error) {
      logger.error('Some error has been ocurred');
      throw error;
    }
  }

  /**
   * @constructor
   * @description This function returns a card by id
   * @param {string} card_id - The card ID to be find.
   * @returns {Promise<Card | null>} - A promise that resolves to the card found or null if it does not exist.
   * @throws {MissingParamError} If the provided ID is not a valid string.
   * @throws {NotFoundResource} If card Does not exists.
   * @throws {Error} If an error occurs while get all cards of the account.
   */
  async listCard(card_id: string): Promise<Card | null> {
    try {
      if (!card_id || typeof card_id != 'string' || card_id.trim() == '') {
        throw new MissingParamError('Must be a valid card');
      }

      const card = await this.cardRepository.listCardById(card_id);

      if (!card) {
        throw new NotFoundResource('card_id');
      }
      return card;
    } catch (error) {
      logger.error('Some error has been ocurred');
      throw error;
    }
  }
}
