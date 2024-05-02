import { Account } from '@prisma/client';
import { DbGetAccountById } from '../../adpaters/repositories/prisma/account/db-find-account-by-id';
import { findAccountById } from '../../domain/use_cases/account/get-account-by-id';

export class GetAccounByIdtUseCase implements findAccountById {
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
