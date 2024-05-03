import { Prisma, Transactions } from '@prisma/client';
import { CreateTransactionRepository } from '../../db/transactions/create-transaction-repository';
import { prisma } from '../../../../infra/lib/prisma';

export class DbCreateTransaction implements CreateTransactionRepository {
  async add(
    data: Prisma.TransactionsUncheckedCreateInput,
  ): Promise<Transactions> {
    const transaction = await prisma.transactions.create({
      data: {
        ...data,
      },
    });

    return transaction;
  }
}
