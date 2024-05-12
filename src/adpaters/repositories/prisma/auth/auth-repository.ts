import { Account } from '@prisma/client';

export interface AuthRepository {
  auth(cpf: string): Promise<Account | null>;
}
