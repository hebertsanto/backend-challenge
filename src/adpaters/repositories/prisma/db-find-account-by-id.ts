import { Account } from '@prisma/client';
import { prisma } from '../../database/prisma';
import { FindAccountByIdRepository } from '../../../domain/use_cases/account/get-account-by-id';

export class DbGetAccountById implements FindAccountByIdRepository {
  async findById(account_id: string): Promise<Account | null> {
    const account = await prisma.account.findUnique({
      where: { id: account_id },
    });
    return account;
  }
}
