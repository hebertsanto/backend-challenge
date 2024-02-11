import { prisma } from '../database/prisma';
import { TAccount } from '../../helpers/types';

export class PrismaAccountRepository {
  async create({ status } : TAccount) {
    const createAccount = await prisma.account.create({
      data: {
        status
      }
    });
    return createAccount;
  }
  async findAccountById(id_account: string) {
    const account = await prisma.account.findUnique({
      where: {
        id: id_account
      }
    });
    return account;
  }
}
