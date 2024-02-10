import { PrismaTransitionRepository } from '../../adpaters/repositories/transaction-repository';

export class ListTransactionUseCase {
  private listTransationsUseCase = new PrismaTransitionRepository();

  async listTransactions(id: string) {
    const transation = await this.listTransationsUseCase.listTransactions(id);

    return transation;
  }
}
