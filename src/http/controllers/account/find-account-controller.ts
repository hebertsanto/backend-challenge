import { Request, Response } from 'express';
import { z } from 'zod';
import { MissingParamError, NotFoundResource } from '../../../helpers/error';
import { makeAccountUseCase } from '../../../use-cases/factories/account';
import { HttpStatus } from '../../../helpers/http/status-code';

export const findAccountByIdController = async (
  req: Request,
  res: Response,
) => {
  const makeFindAccount = await makeAccountUseCase();

  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  try {
    const { id } = paramsSchema.parse(req.params);
    const account = await makeFindAccount.findAccountById(id);

    return res.status(HttpStatus.Ok).json({
      msg: 'Account found successfully',
      account,
    });
  } catch (error) {
    if (error instanceof NotFoundResource) {
      return res.status(HttpStatus.NotFound).json({
        msg: 'Id account does not exist',
      });
    }

    if (error instanceof MissingParamError) {
      return res.status(HttpStatus.BadRequest).json({
        msg: 'Id account is required',
        error,
      });
    }
  }
};
