import { PrismaTransitionRepository } from '../../adpaters/repositories/transaction-repository';
import { MissingParamError, ParamDoesNotExist } from '../../helpers/error';

export class ListTransactionByIdUseCase {
  private listByIdUseCase = new PrismaTransitionRepository();

  async findById(id: string) {
    const transaction = await this.listByIdUseCase.findTransactionById(id);
    if (!id) {
      throw new MissingParamError('transaction_id');
    }
    if (!transaction) {
      throw new ParamDoesNotExist('transaction_id');
    }
    return transaction;
  }
}
