import { Account } from '@prisma/client';

export interface findAccountById {
  findById(account_id: string): Promise<Account | null>;
}
