import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';
import { PrismaTransitionRepository } from '../../adpaters/repositories/transaction-repository';
import { MissingParamError, ParamDoesNotExist } from '../../helpers/error';
import { TTransition } from '../../helpers/types';

export class CreateTranscationUseCase {
  private transitionRepository = new PrismaTransitionRepository();
  private cardRepository = new PrismaCardsRepository();

  async create({ ammout, card_id }: TTransition) {
    if (!ammout) {
      throw new MissingParamError('ammout');
    }

    if (!card_id) {
      throw new MissingParamError('card_id');
    }
    const cardExist = await this.cardRepository.listCardById(card_id);

    if (!cardExist) {
      throw new ParamDoesNotExist('card_id');
    }
    const createTransition = await this.transitionRepository.create({
      ammout,
      card_id,
    });
    return createTransition;
  }

  async findById(id: string) {
    const transition = await this.transitionRepository.findTransactionById(id);
    if (!id) {
      throw new MissingParamError('transaction id');
    }
    if (!transition) {
      throw new ParamDoesNotExist('transaction id');
    }
    return transition;
  }

  async listTransations(id: string) {
    const listOfTransition =
      await this.transitionRepository.listTransactions(id);

    return listOfTransition;
  }
}
