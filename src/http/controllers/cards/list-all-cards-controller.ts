import { Request, Response } from 'express';
import { ListCardsUseCase } from '../../../use-cases/card/list-all-cards-use-case';
import { ZodError, z } from 'zod';


export const listAllCardsController = async(req: Request, res: Response) => {

  const listAllCardsUseCase = new ListCardsUseCase();

  const paramsSchema = z.object({
    id: z.string().uuid()
  });
  try {
    const { id } = paramsSchema.parse(req.params);
    const cards = await listAllCardsUseCase.listAllCards(id);

    return res.status(200).json({
      msg: 'all cards here',
      cards
    });

  } catch (error) {
    if (error instanceof ZodError) {
      return res.json(400).json({
        msg: 'error validation data',
        error
      });
    }
  }
};
