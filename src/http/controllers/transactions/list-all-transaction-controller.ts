import { Request, Response } from 'express';
import { makeTransactionUseCase } from '../../../use-cases/factories/transactions';
import { string, z } from 'zod';
import { MissingParamError, ParamDoesNotExist } from '../../../helpers/error';
import { TTransaction} from '../../../helpers/types';

/**
 *listAllTransactiontionController
 * @param {Request } req request object express
 * @param {Response } res response object express
 * @returns { Promise<TTransaction| unknown>} promise to be solved
 */

export const listAllTransactiontionController = async (
  req: Request,
  res: Response,
) : Promise<TTransaction| unknown>=> {
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
    if (error instanceof ParamDoesNotExist) {
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
