import { Request, Response } from 'express';
import { z } from 'zod';
import { MissingParamError, NotFoundResource } from '../../../helpers/error';
import { HttpStatus } from '../../../helpers/http/status-code';
import getAccountByIdFactory from '../../../use-cases/factories/account/find-account-by-id';

export const findAccountByIdController = async (
  req: Request,
  res: Response,
) => {
  const makeFindAccount = await getAccountByIdFactory();

  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  try {
    const { id } = paramsSchema.parse(req.params);
    const account = await makeFindAccount.findById(id);

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
