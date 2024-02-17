import { prisma } from '../../database/prisma';
import { TransactionRepository } from '../repository-transaction';
import { Prisma, Transation } from '@prisma/client';


export class PrismaTransactionRepository implements TransactionRepository {
  public async create(data: Prisma.TransationUncheckedCreateInput): Promise<Transation> {
    const create = await prisma.transation.create({
      data
    });
    return create;
  }
  public async findTransactionById(id: string): Promise<Transation | null> {
    const transaction = await prisma.transation.findUnique({
      where:{
        id
      }
    });
    return transaction;
  }
  public async listTransactions(card_id: string): Promise<Transation[]> {
    const allTransactionsCard = await prisma.transation.findMany({
      where:{
        card_id
      }
    });
    return allTransactionsCard;
  }
}
