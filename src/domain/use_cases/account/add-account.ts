import { Account } from '@prisma/client';

export interface AddAccount {
  add(email: string, password: string): Promise<Account>;
}
