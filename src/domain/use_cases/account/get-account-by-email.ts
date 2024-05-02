import { Account } from '@prisma/client';

export interface GetAccountByEmail {
  findByEmail(email: string): Promise<Account | null>;
}
