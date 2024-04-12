import { Request, Response } from 'express';
import { ZodError, z } from 'zod';
import { makeAccountUseCase } from '../../../use-cases/factories/account';

export const createAccountController = async (req: Request, res: Response) => {
  const createAccountUseCase = await makeAccountUseCase();

  const bodySchema = z.object({
    email: z.string().email({ message: 'Must be a valid email' }),
    password: z
      .string()
      .min(8, { message: 'Password must have at least 6 characters' }),
  });

  try {
    const { email, password } = bodySchema.parse(req.body);

    const account = await createAccountUseCase.create({ email, password });

    return res.status(201).json({
      msg: 'Account created successfully',
      account,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.json({
        msg: 'Error validating data',
        error,
      });
    }
  }
};
