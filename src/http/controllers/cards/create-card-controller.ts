import { Request, Response } from 'express';
import { makeCreateCard } from '../../../use-cases/factories/card';
import { ZodError, z } from 'zod';
import { ParamDoesNotExist } from '../../../helpers/error';
import { TCard } from '../../../helpers/types';

/**
 *createCardController
 * @param { Request } req request object express
 * @param { Response } res response object express
 * @returns { Promise<TCard>} Promise to be resolved
 */
export const createCardController = async (
  req: Request,
  res: Response,
): Promise<TCard | unknown> => {


  const cardSchema = z.object({
    amount: z.number(),
    id_account: z.string().uuid(),
  });
  const makeCreateCardUseCase = await makeCreateCard();
  try {
    const { amount, id_account } = cardSchema.parse(req.body);
    const card = await makeCreateCardUseCase.create({ amount, id_account });

    return res.status(201).json({
      msg: 'card created successfully',
      card,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        msg: 'error validating data',
        error
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'id account does not exist',
        error,
      });
    }
  }
};
