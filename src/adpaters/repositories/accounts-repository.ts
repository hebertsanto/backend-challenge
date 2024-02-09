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
}
