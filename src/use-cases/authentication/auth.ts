import { MakeAuth } from '../../domain/use_cases/auth/auth';
import { DbAuth } from '../../adpaters/repositories/db/auth/db-auth';
import { logger } from '../../infra/helpers/logger';
import { CredentialsInvalidError } from '../../infra/helpers/error';
import { BcryptAdapter } from '../../adpaters/cryptography/bcrypt-adapter';
import { HttpStatus } from '../../infra/helpers/http/status-code';
import { JwtService } from '../jwt/generate-jwt';

export class AuthUserUseCase implements MakeAuth {
  constructor(
    private readonly authRepository: DbAuth,
    private readonly bcrypt: BcryptAdapter,
    private  readonly  jwtService: JwtService
  ) {}

  async auth(cpf: string, password: string): Promise<string> {
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

      const {  token } = await this.jwtService.generatejwt({ email: user.email as string, id: user.id });

      return  token;
    } catch (error) {
      logger.error(error);
      throw new Error('Some error has been ocurred');
    }
  }
}
