import { Request, Response } from 'express';
import { ListCardByIdUseCase } from '../../../use-cases/card/list-card-use-case';
import { z } from 'zod';
import { MissingParamError, ParamDoesNotExist } from '../../../helpers/error';
import { TCard } from '../../../helpers/types';

/**
 *listCardByIdController
 * @param { Request } req request object express
 * @param { Response } res response object express
 * @returns { Promise<TCard>} Promise to be resolved
 */
export const listCardByIdController = async (
  req: Request,
  res: Response,
): Promise<TCard | unknown> => {
  const listCardByIdUseCase = new ListCardByIdUseCase();

  const paramsSchema = z.object({
    id: z.string().uuid(),
  });
  try {
    const { id } = paramsSchema.parse(req.params);
    const card = await listCardByIdUseCase.listCard(id);

    return res.status(200).json({
      msg: 'card found successfully',
      card,
    });
  } catch (error) {
    if (error instanceof MissingParamError) {
      return res.json(400).json({
        msg: 'id card is required',
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.json(400).json({
        msg: 'id account does not exist',
      });
    }
  }
};
