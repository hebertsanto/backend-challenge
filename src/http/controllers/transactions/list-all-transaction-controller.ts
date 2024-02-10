import { Request, Response } from 'express';
import { ListTransactionUseCase } from '../../../use-cases/transation/list-all-transaction-use-case';
import { string, z, ZodError  } from 'zod';

export const listAllTransactiontionController = async(req: Request, res :Response) => {

  const listAllTransations = new ListTransactionUseCase();
  const paramsSchema = z.object({
    id: string().uuid()
  });

  try {

    const { id } = paramsSchema.parse(req.params);

    const ListOftransation = await listAllTransations.listTransactions(id);
    return res.status(200).json({
      msg: 'all transations are available',
      ListOftransation
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        msg: 'error data',
        error
      });
    }
  }
};
