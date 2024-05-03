import { Account } from '@prisma/client';
import { GetAccountByEmail } from '../../domain/use_cases/account/get-account-by-email';
import { DbGetAccountByEmail } from '../../adpaters/repositories/prisma/account/db-get-account-by-email';
import { MissingParamError, NotFoundResource } from '../../infra/helpers/error';

export class GetAccounByEmailtUseCase implements GetAccountByEmail {
  constructor(private findAccountByEmailRepository: DbGetAccountByEmail) {}

  async findByEmail(email: string): Promise<Account | null> {
    if (!email) throw new MissingParamError('email');

    const accountFind =
      await this.findAccountByEmailRepository.findByEmail(email);
    if (!accountFind) {
      throw new NotFoundResource('email');
    }

    return accountFind;
  }
}
