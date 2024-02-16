import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';
import { CreateAccountUseCase } from '../account/create-account-use-case';
import { CreateCardUseCase } from '../card/create-card-use-case';


export async function makeCreateCard() {
  const accountUseCase = new CreateAccountUseCase();
  const prismaCardRepository = new PrismaCardsRepository(accountUseCase);
  const createCardUseCase = new CreateCardUseCase(prismaCardRepository);
  return createCardUseCase;
}
