import { Account } from '@prisma/client';
import { AddAccount } from '../../domain/use_cases/account/add-account';
import { MissingParamError } from '../../helpers/error';
import { logger } from '../../helpers/logger';
import { validateEmail } from '../../helpers/validations/validate-email';
import { Hasher } from '../../adpaters/protocols/hasher';
import { DbAddAccount } from '../../adpaters/repositories/prisma/account/db-add-account';
import { validatePassword } from '../../helpers/validations/validate-password';

interface ValidateParamsAddAccount {
  validateRequest(email: string, password: string): void;
}

export class AddAccountUseCase implements AddAccount, ValidateParamsAddAccount {
  constructor(
    private accountRepository: DbAddAccount,
    private hasher: Hasher,
  ) {}

  async add(email: string, password: string): Promise<Account> {
    try {
      this.validateRequest(email, password);
      const passwordHash = await this.hasher.hash(password);

      const createdAccount = await this.accountRepository.add({
        email,
        password: passwordHash,
      });

      return createdAccount;
    } catch (error) {
      logger.error(
        `Error while checking account existence: ${(error as Error).message}`,
      );
      throw new Error('Failed to create account');
    }
  }

  validateRequest(email: string, password: string): void {
    if (!email) throw new MissingParamError('email');
    if (!password) throw new MissingParamError('password');

    logger.info('[validating user informations]');
    validateEmail(email);
    validatePassword(password);
  }
}
