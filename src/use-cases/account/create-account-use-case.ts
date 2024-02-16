import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { ParamDoesNotExist } from '../../helpers/error';
import { TAccount } from '../../helpers/types';

export class CreateAccountUseCase {
  private accountRepository = new PrismaAccountRepository();

  private async checkAccountExistence(id_account: string) {
    const account = await this.accountRepository.findAccountById(id_account);

    if (!account) {
      throw new ParamDoesNotExist(`this account ${id_account} does not exist`);
    }
    return account;
  }

  async create({ email, password }: TAccount) {
    const createAccount = await this.accountRepository.create({
      email,
      password
    });
    return createAccount;
  }

  async deleteAccount(id_account:  string) {
    await this.checkAccountExistence(id_account);
    await this.accountRepository.deleteAccount(id_account);
  }
}
