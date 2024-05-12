import { Account } from '@prisma/client';

export interface MakeAuth {
  auth(cpf: string, password: string): Promise<Account>;
}
