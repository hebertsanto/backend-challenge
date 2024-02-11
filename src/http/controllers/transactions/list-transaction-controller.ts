import { Request, Response } from 'express';
import { CreateTranscationUseCase  } from '../../../use-cases/transaction/create-transaction-use-case';
import { string, z } from 'zod';
import { MissingParamError, ParamDoesNotExist } from '../../../helpers/error';

export const listTransactionByIdController = async(req: Request, res :Response) => {

  const listAllTransations = new CreateTranscationUseCase();

  const paramsSchema = z.object({
    id: string().uuid(),
  });

  try {
    const { id } = paramsSchema.parse(req.params);
    const listTranstionById = await listAllTransations.findById(id);
    return res.status(200).json({
      msg: 'get stranstition by id successfully',
      listTranstionById
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'transaction not found',
        error
      });
    }
    if (error instanceof MissingParamError) {
      return res.status(400).json({
        msg: 'transaction id is required',
        error
      });
    }
  }
};
