import { Account } from '@prisma/client';
import { DbGetAccountById } from '../../adpaters/repositories/prisma/db-find-account-by-id';

export class GetAccounByIdtUseCase implements DbGetAccountById {
  constructor(private findAccountByEmailRepository: DbGetAccountById) {}

  async findById(account_id: string): Promise<Account | null> {
    const accountFind =
      await this.findAccountByEmailRepository.findById(account_id);
    if (!accountFind) {
      throw new Error('Account not found');
    }

    return accountFind;
  }
}
