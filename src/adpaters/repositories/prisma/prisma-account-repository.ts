import {Account, Prisma } from '@prisma/client';
import { AccountRepository } from '../account-repository';
import { prisma } from '../../database/prisma';

export class PrismaAccountRepository implements AccountRepository {
  public async create(data: Prisma.AccountUncheckedCreateInput): Promise<Account> {
    const account = await prisma.account.create({
      data
    });

    return account;
  }
  public async delete(id: string): Promise< Account | null> {
    return await prisma.account.delete({
      where:{
        id
      }
    });
  }
  public async findById(id: string): Promise< Account | null> {
    const account = await prisma.account.findUnique({
      where:{
        id
      }
    });

    return account;
  }
}
