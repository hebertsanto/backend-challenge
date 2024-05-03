import { Request, Response } from 'express';
import { makeTransactionUseCase } from '../../../../use-cases/factories/transactions';
import { string, z } from 'zod';
import { MissingParamError, NotFoundResource } from '../../../helpers/error';

export const listAllTransactiontionController = async (
  req: Request,
  res: Response,
) => {
  const listAllTransations = await makeTransactionUseCase();
  const paramsSchema = z.object({
    id: string().uuid(),
  });

  try {
    const { id } = paramsSchema.parse(req.params);

    const ListOftransation = await listAllTransations.listTransations(id);
    return res.status(200).json({
      msg: 'all transations are available',
      ListOftransation,
    });
  } catch (error) {
    if (error instanceof NotFoundResource) {
      return res.status(400).json({
        msg: 'transaction does not Exist',
        error,
      });
    }
    if (error instanceof MissingParamError) {
      return res.status(400).json({
        msg: 'missing parameter',
        error,
      });
    }
  }
};
