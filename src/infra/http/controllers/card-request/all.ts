import { Request, Response } from 'express';
import { z } from 'zod';
import { HttpStatus } from '../../../helpers/http/status-code';
import { makeCardUseCase } from '../../../../use-cases/factories/card';
import { HandleRequestController } from '../../../helpers/http/htts-interface';

export class GetAllCards implements HandleRequestController {
  async handle(req: Request, res: Response): Promise<Response> {
    const makeListAllCards = await makeCardUseCase();
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    try {
      const cards = await makeListAllCards.listAllCards(id);

      return res.status(HttpStatus.Ok).json({
        msg: 'All cards user ',
        cards,
      });
    } catch (error) {
      return res.status(HttpStatus.InternalSeverError).json({
        msg: 'Internal server error',
      });
    }
  }
}

export const getAllCardByUserIdHandler = new GetAllCards().handle;
