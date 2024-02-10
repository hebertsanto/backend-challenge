import { Request, Response } from 'express';
import { CreateTranscationUseCase  } from '../../../use-cases/transation/create-transaction-use-case';
import { string, z, ZodError  } from 'zod';

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
    if (error instanceof ZodError) {
      return res.status(400).json({
        msg: 'error data',
        error
      });
    }
  }
};
