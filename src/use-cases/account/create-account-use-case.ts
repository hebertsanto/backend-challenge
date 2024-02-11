import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { MissingParamError } from '../../helpers/error';
import { TAccount } from '../../helpers/types';

export class CreateAccountUseCase {
  private accountRepository = new PrismaAccountRepository();

  async create({ status } : TAccount) {
    const createAccount = await this.accountRepository.create({
      status
    });
    if (!status) {
      throw new MissingParamError('status');
    }
    return createAccount;
  }
}
