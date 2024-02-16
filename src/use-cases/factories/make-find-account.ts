import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { CreateAccountUseCase } from '../account/create-account-use-case';
export async function makeFindAccountUseCase() {
  const prismaAccountRepository = new PrismaAccountRepository();

  const accountUseCase = new CreateAccountUseCase(prismaAccountRepository);

  return accountUseCase;
}
