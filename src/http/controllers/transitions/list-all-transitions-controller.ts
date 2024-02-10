import { Request, Response } from 'express';
import { CreateTransationUseCase } from '../../../use-cases/transation/create-transation-use-case';
import { string, z, ZodError  } from 'zod';

export const listAllTransitionsController = async(req: Request, res :Response) => {

  const listAllTransations = new CreateTransationUseCase();
  const paramsSchema = z.object({
    id: string().uuid()
  });

  try {

    const { id } = paramsSchema.parse(req.params);

    const ListOftransation = await listAllTransations.listTransations(id);
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
