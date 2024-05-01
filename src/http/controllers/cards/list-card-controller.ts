import { Request, Response } from 'express';
import { makeCardUseCase } from '../../../use-cases/factories/card';
import { z } from 'zod';
import { MissingParamError, NotFoundResource } from '../../../helpers/error';
import { HttpStatus } from '../../../helpers/http/status-code';

export const listCardByIdController = async (req: Request, res: Response) => {
  const listCardByIdUseCase = await makeCardUseCase();

  const paramsSchema = z.object({
    id: z.string().uuid(),
  });
  try {
    const { id } = paramsSchema.parse(req.params);
    const card = await listCardByIdUseCase.listCard(id);

    return res.status(HttpStatus.Ok).json({
      msg: 'card found successfully',
      card,
    });
  } catch (error) {
    if (error instanceof MissingParamError) {
      return res.json(HttpStatus.NotFound).json({
        msg: 'Id card is required',
      });
    }
    if (error instanceof NotFoundResource) {
      return res.json(HttpStatus.NotFound).json({
        msg: 'Id account does not exist',
      });
    }
  }
};
