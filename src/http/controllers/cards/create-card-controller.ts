import { Request, Response } from 'express';
import { makeCardUseCase } from '../../../use-cases/factories/card';
import { ZodError, z } from 'zod';
import { NotFoundResource } from '../../../helpers/error';
import { HttpStatus } from '../../../helpers/http/status-code';

export const createCardController = async (req: Request, res: Response) => {
  const cardSchema = z.object({
    amount: z.number(),
    id_account: z.string().uuid(),
  });
  const makeCreateCardUseCase = await makeCardUseCase();
  try {
    const { amount, id_account } = cardSchema.parse(req.body);
    const card = await makeCreateCardUseCase.create({ amount, id_account });

    return res.status(HttpStatus.Create).json({
      msg: 'Card created successfully',
      card,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(HttpStatus.BadRequest).json({
        msg: 'Error validating data',
        error,
      });
    }
    if (error instanceof NotFoundResource) {
      return res.status(HttpStatus.NotFound).json({
        msg: 'id account does not exist',
        error,
      });
    }
  }
};
