import { PrismaTransitionRepository } from '../../adpaters/repositories/transation-repository';

export class ListTransationsUseCase {
  private listTransationsUseCase = new PrismaTransitionRepository();

  async listTransations(id: string) {
    const transation = await this.listTransationsUseCase.listTransitions(id);

    return transation;
  }
}
