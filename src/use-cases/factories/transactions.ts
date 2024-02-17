import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { PrismaTransactionRepository } from '../../adpaters/repositories/prisma/prisma-transaction';
import { CreateTranscationUseCase } from '../transaction/create-transaction-use-case';

export async function makeTransactionUseCase() {
  const prismaCardsRepository = new PrismaCardsRepository();
  const prismaTransaction = new PrismaTransactionRepository();

  const transactionUseCase = new CreateTranscationUseCase(
    prismaCardsRepository,
    prismaTransaction
  );

  return transactionUseCase;
}
