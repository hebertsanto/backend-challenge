import { Request, Response } from 'express';
import { CreateAccountUseCase } from '../../../use-cases/account/create-account-use-case';
import { z } from 'zod';

/**
 * Compare
 * @param req
 * @param res
 * @returns
 */

export const createAccountController = async (
  req: Request,
  res: Response,
): Promise<Response | unknown> => {
  const createAccountUseCase = new CreateAccountUseCase();

  const bodySchema = z.object({
    status: z.string(),
  });

  try {
    const { status } = bodySchema.parse(req.body);

    const account = await createAccountUseCase.create({ status });
    return res.status(200).json({
      msg: 'account created successfully',
      account,
    });
  } catch (error) {
    return error;
  }
};
