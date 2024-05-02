import { Account } from '@prisma/client';
import { PrismaAccountRepository } from '../../adpaters/repositories/prisma/prisma-account-repository';
import { GetAccountByEmail } from '../../domain/use_cases/account/get-account-by-email';

export class GetAccountUseCase implements GetAccountByEmail {
  constructor(private prismaAccountRepository: PrismaAccountRepository) {}

  async findByEmail(email: string): Promise<Account | null> {
    const accountFind =
      await this.prismaAccountRepository.findAccountByEmail(email);

    if (!accountFind) {
      throw new Error('Account not found');
    }

    return accountFind;
  }
}
