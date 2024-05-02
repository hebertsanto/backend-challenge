import { Account } from '@prisma/client';

export interface FindAccountByEmailRepository {
  findByEmail(email: string): Promise<Account | null>;
}
