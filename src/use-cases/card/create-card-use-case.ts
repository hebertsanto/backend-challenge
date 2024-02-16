import { Card } from '@prisma/client';
import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';
import { MissingParamError, ParamDoesNotExist } from '../../helpers/error';
import { TCard } from '../../helpers/types';

export class CreateCardUseCase {
  constructor(private cardRepository: PrismaCardsRepository) {}
  private accountRepository = new PrismaAccountRepository();

  async create({ amount, id_account }: TCard) : Promise<Card> {
    const createCard = await this.cardRepository.create({
      amount,
      id_account,
    });

    const account = await this.accountRepository.findAccountById(id_account);

    if (!account) {
      throw new ParamDoesNotExist('id_account');
    }
    if (!amount) {
      throw new MissingParamError('ammout');
    }
    if (!id_account) {
      throw new MissingParamError('id_account');
    }
    return createCard;
  }
}
