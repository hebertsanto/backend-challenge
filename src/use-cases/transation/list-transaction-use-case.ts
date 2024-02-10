import { PrismaTransitionRepository } from '../../adpaters/repositories/transaction-repository';


export class ListTransactionByIdUseCase {
  private listByIdUseCase = new  PrismaTransitionRepository();

  async findById(id: string) {
    const transition = await this.listByIdUseCase.findTransactionById(id);
    return transition;
  }
}
