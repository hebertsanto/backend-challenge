import { Account, Prisma } from '@prisma/client';

export interface AddAccountRepository {
  add(data: Prisma.AccountUncheckedCreateInput): Promise<Account>;
}
