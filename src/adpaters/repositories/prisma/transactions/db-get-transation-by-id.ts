import { Transactions } from '@prisma/client';
import { GetTransactionByIdRepository } from '../../db/transactions/get-transaction-by-id-repository';
import { prisma } from '../../../database/prisma';

export class DbGetTransactionById implements GetTransactionByIdRepository {
  async getById(transaction_id: string): Promise<Transactions | null> {
    const transaction = await prisma.transactions.findUnique({
      where: {
        id: transaction_id,
      },
    });
    return transaction;
  }
}
