import { Account, Prisma } from '@prisma/client';
import { prisma } from '../../../database/prisma';
import { AddAccountRepository } from '../../db/account/add-account-repository';

export class DbAddAccount implements AddAccountRepository {
  public async add(data: Prisma.AccountUncheckedCreateInput): Promise<Account> {
    const account = await prisma.account.create({
      data,
    });
    return account;
  }
}
