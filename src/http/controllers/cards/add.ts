import { Request, Response } from 'express';
import { HandleRequestController } from '../account/add';
import { makeCardUseCase } from '../../../use-cases/factories/card';
import { HttpStatus } from '../../../helpers/http/status-code';
import { validateBody } from '../../middlewares/validate-body';
import { createCardValidationSchema } from '../../../helpers/validations/schemas';

export class AddCardController implements HandleRequestController {
  async handle(req: Request, res: Response): Promise<Response> {
    const addCardService = await makeCardUseCase();

    const { amount, id_account } = req.body;
    try {
      const card = await addCardService.create({ amount, id_account });

      return res
        .status(HttpStatus.Create)
        .json({ message: 'Card added sucessfully', card });
    } catch (error) {
      return res
        .status(HttpStatus.InternalSeverError)
        .json({ message: 'Internal Error server' });
    }
  }
}

export const createCardHanlder = [
  validateBody(createCardValidationSchema),
  new AddCardController().handle,
];
