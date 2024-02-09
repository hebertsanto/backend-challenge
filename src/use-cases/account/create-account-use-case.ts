import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { TAccount } from '../../helpers/types';

export class CreateAccountUseCase {
  private accountRepository = new PrismaAccountRepository();

  async create({ status } : TAccount) {
    const createAccount = await this.accountRepository.create({
      status
    });

    return createAccount;
  }
}
