import { prisma } from '../database/prisma';
import { TAccount } from '../../helpers/types';
import { Account } from '@prisma/client';

export class PrismaAccountRepository {
  /**
   *create
   *create an account
   *@param {string} email
   *@param {string} password
   *@returns {Promise<TAccount>} a promisse that resolves with the new account data
   */

  async create({  email, password }: TAccount) : Promise<Account> {
    const createAccount = await prisma.account.create({
      data: {
        email,
        password
      },
    });
    return createAccount;
  }

  /**
   *find an account by id
   *findAccount|ById
   *@param {string} id_account - uuid of the account to be found
   *@returns {Promise<Account>} - account to be found or null
   */

  async findAccountById(id_account: string) : Promise<Account | null>  {
    const account = await prisma.account.findUnique({
      where: {
        id: id_account,
      },
    });
    return account;
  }
  async deleteAccount(id_account: string) {
    return await prisma.account.delete({
      where:{
        id: id_account,
      },
    });
  }
}
