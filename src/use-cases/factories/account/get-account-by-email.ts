import { DbGetAccountByEmail } from '../../../adpaters/repositories/prisma/account/db-get-account-by-email';
import { GetAccounByEmailtUseCase } from '../../account/get-account-by-email';

export default async function getAccountByEmailFactory() {
  const getAccountRepository = new DbGetAccountByEmail();
  const findAccountByEmailUseCase = new GetAccounByEmailtUseCase(
    getAccountRepository,
  );

  return findAccountByEmailUseCase;
}
