import { DbGetAccountById } from '../../../adpaters/repositories/prisma/db-find-account-by-id';
import { GetAccounByIdtUseCase } from '../../account/get-account-by-id';

export default async function getAccountByIdFactory() {
  const getAccountRepository = new DbGetAccountById();

  const findAccountByIdUseCase = new GetAccounByIdtUseCase(
    getAccountRepository,
  );

  return findAccountByIdUseCase;
}
