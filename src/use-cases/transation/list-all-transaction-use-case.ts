import { PrismaTransitionRepository } from '../../adpaters/repositories/transaction-repository';
import { MissingParamError, ParamDoesNotExist } from '../../helpers/error';

export class ListTransactionUseCase {
  private listTransationsUseCase = new PrismaTransitionRepository();

  async listTransactions(id: string) {
    const transation = await this.listTransationsUseCase.listTransactions(id);
    if (!id) {
      throw new MissingParamError('transaction_id');
    }
    if (transation) {
      throw new ParamDoesNotExist('transactions_id');
    }
    return transation;
  }
}
