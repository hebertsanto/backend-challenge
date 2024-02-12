import { MissingParamError } from '../../helpers/error';
import { ParamDoesNotExist } from '../../helpers/error';
import { CreateTranscationUseCase } from './create-transaction-use-case';

//eslint-disable-next-line
let useCase: any;

test('should throw MissingParamError if ammout is not provided', async () => {
  useCase = new CreateTranscationUseCase();
  await expect(useCase.create({ card_id: 'card_id' })).rejects.toThrow(MissingParamError);
});

test('should throw MissingParamError if card_id is not provided', async () => {
  useCase = new CreateTranscationUseCase();
  await expect(useCase.create({ ammout: '300' })).rejects.toThrow(MissingParamError);
});

test('should throw ParamDoesNotExist if card_id does not exist', async () => {
  useCase = new CreateTranscationUseCase();
  await expect(useCase.create({card_id: 'card_does_not_exit', ammout: '300'})).rejects.toThrow(ParamDoesNotExist);
});
