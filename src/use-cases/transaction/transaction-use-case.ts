import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { PrismaTransactionRepository } from '../../adpaters/repositories/prisma/prisma-transaction';
import { MissingParamError, NotFoundResource } from '../../infra/helpers/error';
import { TTransaction } from '../../infra/helpers/types';
import { CreateCardUseCase } from '../card/card-use-case';

export class CreateTranscationUseCase {
  constructor(
    private cardRepository: PrismaCardsRepository,
    private transactionRepository: PrismaTransactionRepository,
    private createCard: CreateCardUseCase,
  ) {}

  async create({ ammout, card_id }: TTransaction) {
    if (!ammout) {
      throw new MissingParamError('ammout');
    }

    if (!card_id) {
      throw new MissingParamError('card_id');
    }
    const cardExist = await this.cardRepository.listCardById(card_id);

    if (!cardExist) {
      throw new NotFoundResource(`${card_id}`);
    }
    const createTransition = await this.transactionRepository.create({
      ammout,
      card_id,
    });
    return createTransition;
  }

  async findById(transaction_id: string) {
    const transition =
      await this.transactionRepository.findTransactionById(transaction_id);
    if (!transaction_id) {
      throw new MissingParamError(`${transaction_id}`);
    }
    if (!transition) {
      throw new NotFoundResource(`${transaction_id}`);
    }
    return transition;
  }

  async listTransations(card_id: string) {
    const listOfTransition =
      await this.transactionRepository.listTransactions(card_id);
    await this.createCard.listCard(card_id);
    return listOfTransition;
  }
}
