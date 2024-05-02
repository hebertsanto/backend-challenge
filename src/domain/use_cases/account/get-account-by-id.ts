import { Account } from '@prisma/client';

export interface FindAccountByIdRepository {
  findById(account_id: string): Promise<Account | null>;
}
