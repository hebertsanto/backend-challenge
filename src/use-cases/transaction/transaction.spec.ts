import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { PrismaTransactionRepository } from '../../adpaters/repositories/prisma/prisma-transaction';
import { MissingParamError, NotFoundResource } from '../../helpers/error';
import { CreateTranscationUseCase } from './create-transaction-use-case';

interface CardRepositoryMock extends PrismaCardsRepository {
  //eslint-disable-next-line
  listCardById: jest.Mock<any, any>;
}

interface TransactionRepositoryMock extends PrismaTransactionRepository {
  //eslint-disable-next-line
  create: jest.Mock<any, any>;
}

const cardRepositoryMock: CardRepositoryMock = {
  listCardById: jest.fn(),
  create: jest.fn(),
  listCards: jest.fn(),
};

const transactionRepositoryMock: TransactionRepositoryMock = {
  create: jest.fn(),
  findTransactionById: jest.fn(),
  listTransactions: jest.fn(),
};

const transactionUseCase = new CreateTranscationUseCase(
  cardRepositoryMock,
  transactionRepositoryMock,
);

test('should return NotFoundResource error if card id does not exist', async () => {
  await expect(
    transactionUseCase.create({
      ammout: '400',
      card_id: 'not_exist_card_id',
    }),
  ).rejects.toThrow(NotFoundResource);
});

test('should return MissingParamError if ammout or card_id is not set', async () => {
  await expect(
    transactionUseCase.create({ ammout: '', card_id: '' }),
  ).rejects.toThrow(MissingParamError);
});

test('should return NotFoundResource if transaction id does not exist', async () => {
  await expect(
    transactionUseCase.findById('non_existing_transaction_id'),
  ).rejects.toThrow(NotFoundResource);
});

