import { Request, Response } from 'express';
import addAccountFactory from '../../../../use-cases/factories/account/add-account';
import { HttpStatus } from '../../../helpers/http/status-code';
import { validateBody } from '../../middlewares/validate-body';
import { createAccountValidationSchema } from '../../../helpers/validations/schemas';
import { HandleRequestController } from '../../../helpers/http/htts-interface';

export class AddAccountController implements HandleRequestController {
  async handle(req: Request, res: Response): Promise<Response> {
    const addAccountService = await addAccountFactory();
    const { email, password } = req.body;

    try {
      const account = addAccountService.add(email, password);

      return res
        .status(HttpStatus.Create)
        .json({ message: 'Account has been created', account });
    } catch (error) {
      return res
        .status(HttpStatus.InternalSeverError)
        .json({ message: 'Internal server error' });
    }
  }
}

export const addAccountHandler = [
  validateBody(createAccountValidationSchema),
  new AddAccountController().handle,
];
