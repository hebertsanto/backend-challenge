import { Account } from '@prisma/client';
import { prisma } from '../../../database/prisma';
import { FindAccountByIdRepository } from '../../db/account/db-account-by-id-repository';

export class DbGetAccountById implements FindAccountByIdRepository {
  async findById(account_id: string): Promise<Account | null> {
    const account = await prisma.account.findUnique({
      where: { id: account_id },
    });
    return account;
  }
}
