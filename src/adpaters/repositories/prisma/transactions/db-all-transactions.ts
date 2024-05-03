import { Transactions } from '@prisma/client';
import { GetAllTransactionsRepository } from '../../db/transactions/all-transactions';
import { prisma } from '../../../../infra/lib/prisma';

export class DbGetAllTransactions implements GetAllTransactionsRepository {
  async all(account_id: string): Promise<Transactions[] | null> {
    const allTransactions = await prisma.transactions.findMany({
      where: {
        accountId: account_id,
      },
    });
    return allTransactions;
  }
}
