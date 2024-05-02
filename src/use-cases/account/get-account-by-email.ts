import { Account } from '@prisma/client';
import { GetAccountByEmail } from '../../domain/use_cases/account/get-account-by-email';
import { DbGetAccountByEmail } from '../../adpaters/repositories/prisma/db-get-account-by-email';

export class GetAccounByEmailtUseCase implements GetAccountByEmail {
  constructor(private findAccountByEmailRepository: DbGetAccountByEmail) {}

  async findByEmail(email: string): Promise<Account | null> {
    const accountFind =
      await this.findAccountByEmailRepository.findByEmail(email);
    if (!accountFind) {
      throw new Error('Account not found');
    }

    return accountFind;
  }
}
