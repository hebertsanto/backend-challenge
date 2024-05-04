import { Account } from '@prisma/client';
import { CreateAccountData } from '../../../use-cases/account/add-account';

export interface AddAccount {
  add({ email, password, cpf }: CreateAccountData): Promise<Account>;
}
