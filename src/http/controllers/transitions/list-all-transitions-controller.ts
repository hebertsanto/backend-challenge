import { Request, Response } from 'express';
import { CreateTransationUseCase } from '../../../use-cases/transation/create-transation-use-case';
import { z, ZodError  } from 'zod';

export const CreateTransationController = async(req: Request, res :Response) => {

  const listAllTransations = new CreateTransationUseCase();
  const { id } = req.params;
  const zodIdSchema = z.string().uuid();

  try {

    zodIdSchema.parse(id);

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
