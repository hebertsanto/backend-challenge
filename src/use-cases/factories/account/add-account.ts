import { BcryptAdapter } from '../../../adpaters/cryptography/bcrypt-adapter';
import { DbAddAccount } from '../../../adpaters/repositories/prisma/db-add-account';
import { AddAccountUseCase } from '../../account/add-account';

export default async function addAccountFactory() {
  const hash = new BcryptAdapter(10);
  const addAccountRepository = new DbAddAccount();

  const addAccount = new AddAccountUseCase(addAccountRepository, hash);

  return addAccount;
}
