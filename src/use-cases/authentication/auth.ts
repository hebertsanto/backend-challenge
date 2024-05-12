import { MakeAuth } from '../../domain/use_cases/auth/auth';
import { Account } from '@prisma/client';
import { DbAuth } from '../../adpaters/repositories/db/auth/db-auth';
import { logger } from '../../infra/helpers/logger';
import { CredentialsInvalidError } from '../../infra/helpers/error';
import { BcryptAdapter } from '../../adpaters/cryptography/bcrypt-adapter';
import { HttpStatus } from '../../infra/helpers/http/status-code';

export class AuthUserUseCase implements MakeAuth {
  constructor(
    private readonly authRepository: DbAuth,
    private readonly bcrypt: BcryptAdapter,
  ) {}

  async auth(cpf: string, password: string): Promise<Account> {
    try {
      const user = await this.authRepository.auth(cpf);

      const isValidPassword: boolean = await this.bcrypt.compare(
        password,
        user?.password as string,
      );

      if (!isValidPassword || !user) {
        throw new CredentialsInvalidError(
          'Invalid cpf or password',
          HttpStatus.Unauthorized,
        );
      }

      logger.info('Should generate jwt with token and id of users');
      return user;
    } catch (error) {
      logger.error(error);
      throw new Error('Some error has been ocurred');
    }
  }
}
