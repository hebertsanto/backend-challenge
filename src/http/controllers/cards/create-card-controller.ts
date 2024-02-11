import { Request, Response  } from 'express';
import { CreateCardUseCase } from '../../../use-cases/card/create-card-use-case';
import { z } from 'zod';
import { MissingParamError, ParamDoesNotExist } from '../../../helpers/error';

export const createCardController = async(req: Request, res: Response) => {

  const  createCardUseCase = new CreateCardUseCase();

  const cardSchema = z.object({
    amount: z.number(),
    id_account: z.string().uuid()
  });

  try {
    const { amount, id_account } =  cardSchema.parse(req.body);
    const card = await createCardUseCase.create({ amount, id_account});

    return res.status(201).json({
      msg: 'card created successfully',
      card
    });
  } catch (error) {
    if (error instanceof MissingParamError) {
      return res.status(400).json({
        msg: 'missing parameter error',
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'id account does not exist',
        error
      });
    }
  }
};
