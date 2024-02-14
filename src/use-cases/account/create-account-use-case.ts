import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { TAccount } from '../../helpers/types';

export class CreateAccountUseCase {
  private accountRepository = new PrismaAccountRepository();

  async create({ email, password }: TAccount) {
    const createAccount = await this.accountRepository.create({
      email,
      password
    });
    return createAccount;
  }
}
