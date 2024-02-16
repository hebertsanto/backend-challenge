import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { ParamDoesNotExist } from '../../helpers/error';
import { TAccount } from '../../helpers/types';
import { Account } from '@prisma/client';

export class CreateAccountUseCase {

  constructor(private accountRepository: PrismaAccountRepository) {}

  async checkAccountExistence(id_account: string) : Promise<Account | null> {
    const account = await this.accountRepository.findAccountById(id_account);

    if (!account) {
      throw new ParamDoesNotExist(`this account ${id_account} does not exist`);
    }
    return account;
  }

  async create({ email, password }: TAccount) : Promise<Account> {
    const createAccount = await this.accountRepository.create({
      email,
      password
    });
    return createAccount;
  }

  async deleteAccount(id_account:  string) : Promise<Account> {
    await this.checkAccountExistence(id_account);
    return await this.accountRepository.deleteAccount(id_account);

  }

  async findAccountById(id_account: string) : Promise<Account | null> {
    await this.checkAccountExistence(id_account);

    const account = await this.accountRepository.findAccountById(id_account);

    return account;
  }
}
