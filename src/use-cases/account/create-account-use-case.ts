import { PrismaAccountRepository } from '../../adpaters/repositories/prisma/prisma-account-repository';
import {
  MissingParamError,
  NotFoundResource,
  ResourseAlreadyExist,
} from '../../helpers/error';
import { logger } from '../../helpers/logger';
import { TAccount } from '../../helpers/types';
import { Account } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export class CreateAccountUseCase {
  constructor(private accountRepository: PrismaAccountRepository) {}

  /**
   * @constructor
   * @param {string} id_account - The account ID to verify.
   * @returns {Promise<Account|null>} - A promise that resolves to the account found or null if it does not exist.
   * @throws {MissingParamError} If the provided ID is not a valid string.
   * @throws {NotFoundResource} If account Does not exists.
   * @throws {Error} If an error occurs while checking the existence of the account.
   */
  async checkAccountExistence(id_account: string): Promise<Account | null> {
    try {
      const account = await this.accountRepository.findById(id_account);

      if (typeof id_account !== 'string' || id_account.trim() === '') {
        throw new MissingParamError('Id must be a valid string');
      }

      if (!account) {
        throw new NotFoundResource(`this account ${id_account} does not exist`);
      }

      return account;
    } catch (error) {
      logger.error(
        `Error while checking account existence: ${(error as Error).message}`,
      );
      throw error;
    }
  }

  /**
   * @constructor
   * @param {string} email - The email to create an account.
   * @param {string} password - The password to create an account.
   * @returns {Promise<Account>} - A promise that resolves to the account found
   * @throws {MissingParamError} - If the email or password is not provided
   * @throws {ResourseAlreadyExist} - If the account already exist
   * @throws {Error} If an error occurs while checking the existence of the account.
   */
  async create({ email, password }: TAccount): Promise<Account> {
    try {
      if (!email) {
        throw new MissingParamError('email');
      }
      if (!password) {
        throw new MissingParamError('password');
      }

      logger.info('Verify if account already exist in database');
      const accountExistent =
        await this.accountRepository.findAccountByEmail(email);

      if (accountExistent) {
        throw new ResourseAlreadyExist(email);
      }

      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

      if (!emailRegex.test(email)) {
        throw new Error('Must be a valid email');
      }

      logger.info('generate hash of password...');
      const passwordHash = await bcrypt.hash(password, 10);

      const createdAccount = await this.accountRepository.create({
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

  async deleteAccount(id_account: string): Promise<Account | null> {
    await this.checkAccountExistence(id_account);
    return await this.accountRepository.delete(id_account);
  }

  async findAccountById(id_account: string): Promise<Account | null> {
    await this.checkAccountExistence(id_account);

    const account = await this.accountRepository.findById(id_account);

    return account;
  }
}
