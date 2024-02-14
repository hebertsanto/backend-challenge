import { prisma } from '../database/prisma';
import { TAccount } from '../../helpers/types';

export class PrismaAccountRepository {
  /**
   *create
   *create an account
   *@param {string} email
   *@param {string} password
   *@returns {Promise<TAccount>} a promisse that resolves with the new account data
   */

  async create({  email, password }: TAccount) {
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
   *@returns {Promise<TAccount | null>} - account to be found or null
   */

  async findAccountById(id_account: string) {
    const account = await prisma.account.findUnique({
      where: {
        id: id_account,
      },
    });
    return account;
  }
}
