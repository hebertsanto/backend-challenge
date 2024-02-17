import { PrismaAccountRepository } from '../../adpaters/repositories/accounts-repository';
import { CreateAccountUseCase } from '../account/create-account-use-case';

export async function makeAccountUseCase() {
  const prismaAccountRepository = new PrismaAccountRepository();
  const createAccountUseCase = new CreateAccountUseCase(prismaAccountRepository);

  return createAccountUseCase;
}
