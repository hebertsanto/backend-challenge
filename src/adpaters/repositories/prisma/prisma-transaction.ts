import { prisma } from '../../database/prisma';
import { TransactionRepository } from '../repository-transaction';
import { Prisma, Transactions } from '@prisma/client';


export class PrismaTransactionRepository implements TransactionRepository {
  public async create(data: Prisma.TransactionsUncheckedCreateInput): Promise<Transactions> {
    const create = await prisma.transactions.create({
      data
    });
    return create;
  }
  public async findTransactionById(id: string): Promise<Transactions | null> {
    const transaction = await prisma.transactions.findUnique({
      where:{
        id
      }
    });
    return transaction;
  }
  public async listTransactions(card_id: string): Promise<Transactions[]> {
    const allTransactionsCard = await prisma.transactions.findMany({
      where:{
        card_id
      }
    });
    return allTransactionsCard;
  }
}
