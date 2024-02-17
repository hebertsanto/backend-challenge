import { Account, Prisma } from '@prisma/client';

export interface AccountRepository{
  create(data: Prisma.AccountUncheckedCreateInput) : Promise<Account>
  findById(id: string): Promise<Account | null>
  delete(id: string): Promise<Account | null>
}
