import { Request, Response } from 'express';
import { NotFoundResource } from '../../../helpers/error';
import { makeTransactionUseCase } from '../../../use-cases/factories/transactions';
import { HttpStatus } from '../../../helpers/http/status-code';
import { validateBody } from '../../middlewares/validate-body';
import { createTransactionValidationSchema } from '../../../helpers/validations/schemas';

export const createTransationController = async (
  req: Request,
  res: Response,
) => {
  const makeTransaction = await makeTransactionUseCase();

  const { ammout, card_id } = req.body;

  try {
    const transation = await makeTransaction.create({
      ammout,
      card_id,
    });

    return res.status(HttpStatus.Create).json({
      msg: 'Transation created successfully',
      transation,
    });
  } catch (error) {
    if (error instanceof NotFoundResource) {
      return res.status(HttpStatus.NotFound).json({
        msg: 'Card id does not exist',
      });
    }
  }
};

export const createTransactionHandler = [
  validateBody(createTransactionValidationSchema),
  createTransationController,
];
