import { Request, Response } from 'express';
import { ZodError, z } from 'zod';
import { NotFoundResource  } from '../../../helpers/error';
import { TTransaction } from '../../../helpers/types';
import { makeTransactionUseCase } from '../../../use-cases/factories/transactions';

export const createTransationController = async (
  req: Request,
  res: Response,
) : Promise<TTransaction | unknown> => {

  const makeTransaction = await makeTransactionUseCase();
  const transaction = z.object({
    ammout: z.string(),
    card_id: z.string().uuid(),
  });

  try {
    const { ammout, card_id } = transaction.parse(req.body);

    const transation = await makeTransaction.create({
      ammout,
      card_id,
    });

    return res.status(200).json({
      msg: 'transation created successfully',
      transation,
    });
  } catch (error) {
    if (error instanceof NotFoundResource) {
      return res.status(400).json({
        msg: 'this card id does not exist',
      });
    }
    if (error instanceof ZodError) {
      return res.status(400).json({
        msg: 'error validating data',
        error,
      });
    }
  }
};
