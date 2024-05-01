import { PrismaAccountRepository } from '../../adpaters/repositories/prisma/prisma-account-repository';
import { MissingParamError, NotFoundResource } from '../../helpers/error';
import { TAccount } from '../../helpers/types';
import { Account } from '@prisma/client';

export class CreateAccountUseCase {
  constructor(private accountRepository: PrismaAccountRepository) {}

  async checkAccountExistence(id_account: string): Promise<Account | null> {
    const account = await this.accountRepository.findById(id_account);

    if (!id_account) {
      throw new MissingParamError('id account');
    }

    if (!account) {
      throw new NotFoundResource(`this account ${id_account} does not exist`);
    }
    return account;
  }

  async create({ email, password }: TAccount): Promise<Account> {
    if (!email) {
      throw new MissingParamError('email');
    }
    if (!password) {
      throw new MissingParamError('password');
    }
    const createAccount = await this.accountRepository.create({
      email,
      password,
    });
    return createAccount;
  }

  async deleteAccount(id_account: string): Promise<Account | null> {
    await this.checkAccountExistence(id_account);
    return await this.accountRepository.delete(id_account);
  }

  async findAccountById(id_account: string): Promise<Account | null> {
    await this.checkAccountExistence(id_account);

    const account = await this.accountRepository.findById(id_account);

    return account;
  }
}
