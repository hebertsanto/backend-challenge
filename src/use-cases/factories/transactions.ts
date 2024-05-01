import { PrismaAccountRepository } from '../../adpaters/repositories/prisma/prisma-account-repository';
import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { PrismaTransactionRepository } from '../../adpaters/repositories/prisma/prisma-transaction';
import { CreateAccountUseCase } from '../account/account-use-case';
import { CreateCardUseCase } from '../card/card-use-case';
import { CreateTranscationUseCase } from '../transaction/transaction-use-case';

export async function makeTransactionUseCase() {
  const prismaCardsRepository = new PrismaCardsRepository();
  const prismaTransaction = new PrismaTransactionRepository();
  const cardRepository = new PrismaCardsRepository();
  const accountRepository = new PrismaAccountRepository();
  const accountService = new CreateAccountUseCase(accountRepository);

  const cardUseCase = new CreateCardUseCase(cardRepository, accountService);

  const transactionUseCase = new CreateTranscationUseCase(
    prismaCardsRepository,
    prismaTransaction,
    cardUseCase,
  );

  return transactionUseCase;
}
