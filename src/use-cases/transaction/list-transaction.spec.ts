import { ParamDoesNotExist } from '../../helpers/error';
import { ListTransactionByIdUseCase } from './list-transaction-use-case';
import { ListTransactionUseCase } from './list-all-transaction-use-case';
//eslint-disable-next-line
let useCase: any;

test('should return a error if TransactionID does not exits', async() => {
  useCase = new ListTransactionByIdUseCase();
  await expect(useCase.findById('fdc2f692-b200-4701-a968-7f280fcb3fcb')).rejects.toThrow(ParamDoesNotExist);
});

test('should return a error if TransactionID does not exits', async() => {
  useCase = new ListTransactionUseCase();
  await expect(useCase.listTransactions('fdc2f692-b200-4701-a968-7f280fcb3fcb')).rejects.toThrow(ParamDoesNotExist);
});

