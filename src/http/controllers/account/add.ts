import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { HttpStatus } from '../../../helpers/http/status-code';
import { validateBody } from '../../middlewares/validate-body';
import { createAccountValidationSchema } from '../../../helpers/validations/schemas';
import addAccountFactory from '../../../use-cases/factories/account/add-account';

export const createAccountController = async (req: Request, res: Response) => {
  const createAccountUseCase = await addAccountFactory();
  const { email, password } = req.body;

  try {
    const account = await createAccountUseCase.add(email, password);

    return res.status(HttpStatus.Create).json({
      msg: 'Account created successfully',
      account,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(HttpStatus.BadRequest).json({
        msg: 'Error validating data',
        error,
      });
    }
  }
};

export const createAccountHandler = [
  validateBody(createAccountValidationSchema),
  createAccountController,
];
