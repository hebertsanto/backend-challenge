import { Request, Response } from 'express';
import { makeCardUseCase } from '../../../use-cases/factories/card';
import { ZodError } from 'zod';
import { NotFoundResource } from '../../../helpers/error';
import { HttpStatus } from '../../../helpers/http/status-code';
import { validateBody } from '../../middlewares/validate-body';
import { createCardValidationSchema } from '../../../helpers/validations/schemas';

export const createCardController = async (req: Request, res: Response) => {
  const makeCreateCardUseCase = await makeCardUseCase();

  const { amount, id_account } = req.body;

  try {
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

export const createCardHandler = [
  validateBody(createCardValidationSchema),
  createCardController,
];
