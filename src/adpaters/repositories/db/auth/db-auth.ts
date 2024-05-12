import { AuthRepository } from '../../prisma/auth/auth-repository';
import { prisma } from '../../../../infra/lib/prisma';
import { Account } from '@prisma/client';

export class  DbAuth implements  AuthRepository {
  async auth(cpf: string): Promise<Account | null> {
    return prisma.account.findUnique({ where: { cpf } });
  }
}
