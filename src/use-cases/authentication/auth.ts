import { MakeAuth } from '../../domain/use_cases/auth/auth';
import { Account } from '@prisma/client';
import { DbAuth } from '../../adpaters/repositories/db/auth/db-auth';
import { logger } from '../../infra/helpers/logger';
import { NotFoundResource } from '../../infra/helpers/error';

export class  AuthUserUseCase implements  MakeAuth {
  constructor(private  readonly authRepository : DbAuth) {}

  async auth(cpf : string): Promise<Account> {
    try {

      const user = await  this.authRepository.auth(cpf);

      logger.info('Should verify password user is correcly');

      if (!user) {
        logger.error('Users does not exist');
        throw new NotFoundResource('User');
      }
      return  user;
    } catch (error) {
      logger.error(error);
      throw  new Error('Some error has been ocurred');
    }
  }
}
