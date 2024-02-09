import { PrismaTransitionRepository } from '../../adpaters/repositories/transation-repository';


export class ListTransationByIdUseCase {
  private listByIdUseCase = new  PrismaTransitionRepository();

  async findById(id: string) {
    const transition = await this.listByIdUseCase.findTransationById(id);
    return transition;
  }
}
