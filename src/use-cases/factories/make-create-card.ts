import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';
import { CreateAccountUseCase } from '../account/create-account-use-case';
import { CreateCardUseCase } from '../card/create-card-use-case';


export async function makeCreateCard() {
  const accountService = new CreateAccountUseCase();
  const prismaCardRepository = new PrismaCardsRepository();
  const cardUseCase = new CreateCardUseCase(prismaCardRepository, accountService);

  return cardUseCase;
}
