import { CreateCardUseCase } from './card-use-case';
import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { MissingParamError, NotFoundResource } from '../../helpers/error';

const mockCardRepository: jest.Mocked<PrismaCardsRepository> = {
  create: jest.fn(),
  listCards: jest.fn(),
  listCardById: jest.fn(),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockAccountService: jest.Mocked<any> = {
  checkAccountExistence: jest.fn(),
};

const createCardUseCase = new CreateCardUseCase(
  mockCardRepository,
  mockAccountService,
);

describe('CREATE CARD', () => {
  it('should return MissingParamError if ammount is not provider', async () => {
    await expect(
      createCardUseCase.create({ amount: 0, id_account: 'fda' }),
    ).rejects.toThrow(MissingParamError);
  });

  it('should return aMissingParamError if id account is not provider', async () => {
    await expect(
      createCardUseCase.create({ amount: 300, id_account: '' }),
    ).rejects.toThrow(MissingParamError);
  });
});

describe('LIST CARD', () => {
  it('should return NotFoundResource if card id does not exist', async () => {
    await expect(createCardUseCase.listCard('iddoesnot')).rejects.toThrow(
      NotFoundResource,
    );
  });

  it('should return MissingParamError if card id is not provider', async () => {
    await expect(createCardUseCase.listCard('')).rejects.toThrow(
      MissingParamError,
    );
  });
});

describe('LIST ALL CARDS', () => {
  it('should return MissingParamError if id account is not provider', async () => {
    await expect(createCardUseCase.listAllCards('')).rejects.toThrow(
      MissingParamError,
    );
  });
});
