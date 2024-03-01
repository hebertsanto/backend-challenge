import { CreateAccountUseCase } from './create-account-use-case';
import { PrismaAccountRepository } from '../../adpaters/repositories/prisma/prisma-account-repository';
import { MissingParamError, NotFoundResource } from '../../helpers/error';

const mockRepository: jest.Mocked<PrismaAccountRepository> = {
  findById: jest.fn(),
  create: jest.fn(),
  delete: jest.fn(),
};

const createAccountUseCase = new CreateAccountUseCase(mockRepository);

describe('CREATE ACCOUNT', () => {
  it('Should return Missing param error when email is not provider', async () => {
    await expect(
      createAccountUseCase.create({ email: '', password: '203040' }),
    ).rejects.toThrow(MissingParamError);
  });

  it('should return a Missing param error when password is not provider', async () => {
    await expect(
      createAccountUseCase.create({
        email: 'hebertsantos0704@gmail.com',
        password: '',
      }),
    ).rejects.toThrow(MissingParamError);
  });

  it('should return a NotFoundResource execptio when account does not exist', async () => {
    await expect(
      createAccountUseCase.findAccountById('doesnotexistid'),
    ).rejects.toThrow(NotFoundResource);
  });

  it('should return a Missingparam error when account id is not provider', async () => {
    await expect(createAccountUseCase.findAccountById('')).rejects.toThrow(
      MissingParamError,
    );
  });
});

describe('DELETE ACCOUNT', () => {
  it('should return a  NotFoundResource error when id is not found', async () => {
    await expect(
      createAccountUseCase.deleteAccount('idnotexist'),
    ).rejects.toThrow(NotFoundResource);
  });
});
