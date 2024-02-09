import { PrismaTransitionRepository } from '../../adpaters/repositories/transation-repository';

export interface ITransition{
    ammout:  string,
    card_id: string
}
export class CreateTransationUseCase {

  private transitionRepository = new PrismaTransitionRepository();

  async create({ ammout, card_id }: ITransition) {
    const createTransition = await this.transitionRepository.create({
      ammout,
      card_id
    });
    return createTransition;
  }

  async findById(id: string) {
    const transition = await this.transitionRepository.findTransationById(id);

    return transition;
  }

  async listTransations(id: string) {
    const listOfTransition = await this.transitionRepository.listTransitions(id);

    return listOfTransition;
  }
}
