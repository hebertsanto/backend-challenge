import { Request, Response } from 'express';
import { ZodError, z } from 'zod';
import { makeCardUseCase } from '../../../use-cases/factories/card';

export const listAllCardsController = async (
  req: Request,
  res: Response,
) => {

  const makeListAllCards = await makeCardUseCase();
  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsSchema.parse(req.params);

  try {

    const cards = await makeListAllCards.listAllCards(id);

    return res.status(200).json({
      msg: 'all cards user ',
      cards
    });

  } catch (error) {
    if (error instanceof ZodError) {
      return res.json(400).json({
        msg: 'error validation data',
        error,
      });
    }
  }
};
