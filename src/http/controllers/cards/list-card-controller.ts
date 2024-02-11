import { Request, Response } from 'express';
import { ListCardByIdUseCase } from '../../../use-cases/card/list-card-use-case';
import { z } from 'zod';
import { MissingParamError, ParamDoesNotExist } from '../../../helpers/error';

export const listCardByIdController = async(req: Request, res: Response) => {

  const listCardByIdUseCase = new ListCardByIdUseCase();

  const paramsSchema = z.object({
    id: z.string().uuid()
  });
  try {
    const { id } = paramsSchema.parse(req.params);
    const card = await listCardByIdUseCase.listCard(id);

    return res.status(200).json({
      msg: 'card by id are here',
      card
    });

  } catch (error) {
    if (error instanceof MissingParamError) {
      return res.json(400).json({
        msg: 'some error ocurred'
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.json(400).json({
        msg: 'id_account does not exist'
      });
    }
  }
};
