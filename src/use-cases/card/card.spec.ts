import { CreateCardUseCase } from './card-use-case';
import { PrismaCardsRepository } from '../../adpaters/repositories/prisma/prisma-card-repository';
import { CreateAccountUseCase } from '../account/create-account-use-case';
import { MissingParamError } from '../../helpers/error';

describe('CreateCardUseCase', () => {
  let createCardUseCase: CreateCardUseCase;
  let cardRepository: PrismaCardsRepository;
  let accountService: CreateAccountUseCase;

  beforeEach(() => {
    cardRepository = new PrismaCardsRepository();
    accountService = new CreateAccountUseCase(cardRepository);
    createCardUseCase = new CreateCardUseCase(cardRepository, accountService);
  });

  it('should throw an error if amount is missing', async () => {
    const createCardData = { id_account: 'account_id' };

    await expect(createCardUseCase.create(createCardData)).rejects.toThrowError(
      new MissingParamError('amount')
    );
  });

  it('should throw an error if id_account is missing', async () => {
    const createCardData = { amount: 100 };

    await expect(createCardUseCase.create(createCardData)).rejects.toThrowError(
      new MissingParamError('id_account')
    );
  });

  it('should throw an error if account does not exist', async () => {
    const createCardData = { amount: 100, id_account: 'non_existing_account_id' };

    jest.spyOn(accountService, 'checkAccountExistence').mockRejectedValueOnce(new NotFoundResource('Account not found'));

    await expect(createCardUseCase.create(createCardData)).rejects.toThrowError(
      new NotFoundResource('Account not found')
    );
  });

  it('should create a card successfully', async () => {
    const createCardData = { amount: 100, id_account: 'existing_account_id' };

    jest.spyOn(accountService, 'checkAccountExistence').mockResolvedValueOnce();

    const createdCard = await createCardUseCase.create(createCardData);

    expect(createdCard.amount).toBe(100);
    expect(createdCard.id_account).toBe('existing_account_id');
    // Add more assertions based on your requirements
  });
});
