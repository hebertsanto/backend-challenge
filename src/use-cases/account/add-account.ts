import { Account } from '@prisma/client';
import { AddAccount } from '../../domain/use_cases/account/add-account';
import { MissingParamError } from '../../infra/helpers/error';
import { logger } from '../../infra/helpers/logger';
import { isValidEmail } from '../../infra/helpers/validations/validate-email';
import { Hasher } from '../../adpaters/protocols/hasher';
import { DbAddAccount } from '../../adpaters/repositories/prisma/account/db-add-account';
import { isValidPassword } from '../../infra/helpers/validations/validate-password';

interface ValidateParamsAddAccount {
  validateRequest({ email, password, cpf }: CreateAccountData): void;
}

export type CreateAccountData = {
  email: string;
  password: string;
  cpf: string;
}

export class AddAccountUseCase implements AddAccount, ValidateParamsAddAccount {
  constructor(
    private accountRepository: DbAddAccount,
    private hasher: Hasher,
  ) {}

  async add({ email, password, cpf }: CreateAccountData): Promise<Account> {
    try {
      this.validateRequest({ email, password, cpf });

      const passwordHash = await this.hasher.hash(password);

      logger.info('Creating a message in kafka');
      return await this.accountRepository.add({
        email,
        password: passwordHash,
        cpf,
      });
    } catch (error) {
      logger.error(
        `Error while checking account existence: ${(error as Error).message}`,
      );
      throw new Error('Failed to create account');
    }
  }

  public validateRequest({ email, password, cpf }: CreateAccountData): void {
    if (!email) throw new MissingParamError('email');
    if (!password) throw new MissingParamError('password');
    if (!cpf) throw new MissingParamError('cpf');
    logger.info('[validating user informations...]');
    isValidEmail(email);
    isValidPassword(password);
  }
}
