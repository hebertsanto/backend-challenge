import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { makeAccountUseCase } from '../../../use-cases/factories/account';
import { HttpStatus } from '../../../helpers/http/status-code';
import { validateBody } from '../../middlewares/validate-body';
import { createAccountValidationSchema } from '../../../helpers/validations/schemas';

export const createAccountController = async (req: Request, res: Response) => {
  const createAccountUseCase = await makeAccountUseCase();
  try {
    const { email, password } = req.body;

    const account = await createAccountUseCase.create({ email, password });

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
