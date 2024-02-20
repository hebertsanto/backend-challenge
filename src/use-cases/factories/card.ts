import { PrismaAccountRepository } from '../../adpaters/repositories/prisma/prisma-account-repository';
import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { CreateAccountUseCase } from '../account/create-account-use-case';
import { CreateCardUseCase } from '../card/card-use-case';


export async function makeCardUseCase() {
  const prismaAccountRepository = new PrismaAccountRepository();
  const accountService = new CreateAccountUseCase(prismaAccountRepository);
  const prismaCardRepository = new PrismaCardsRepository();

  const cardUseCase = new CreateCardUseCase(
    prismaCardRepository,
    accountService
  );

  return cardUseCase;
}
