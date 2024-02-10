import { PrismaTransitionRepository } from '../../adpaters/repositories/transaction-repository';
import { TTransition } from '../../helpers/types';

export class CreateTranscationUseCase {

  private transitionRepository = new PrismaTransitionRepository();

  async create({ ammout, card_id }: TTransition) {
    const createTransition = await this.transitionRepository.create({
      ammout,
      card_id
    });
    return createTransition;
  }

  async findById(id: string) {
    const transition = await this.transitionRepository.findTransactionById(id);

    return transition;
  }

  async listTransations(id: string) {
    const listOfTransition = await this.transitionRepository.listTransactions(id);

    return listOfTransition;
  }
}
