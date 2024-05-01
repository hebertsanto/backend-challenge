import { Request, Response } from 'express';
import { ZodError, z } from 'zod';
import { makeAccountUseCase } from '../../../use-cases/factories/account';
import { HttpStatus } from '../../../helpers/http/status-code';

export const createAccountController = async (req: Request, res: Response) => {
  const createAccountUseCase = await makeAccountUseCase();

  const bodySchema = z.object({
    email: z.string(),
    password: z.string().min(8, 'Password must have at least 6 characters'),
  });

  try {
    const { email, password } = bodySchema.parse(req.body);

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
