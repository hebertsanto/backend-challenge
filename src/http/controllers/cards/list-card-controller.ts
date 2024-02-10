import { Request, Response } from 'express';
import { ListCardByIdUseCase } from '../../../use-cases/card/list-card-use-case';

export const listAllCardByIdController = async(req: Request, res: Response) => {

  const listCardByIdUseCase = new ListCardByIdUseCase();
  const { id } = req.params;

  try {
    const card = await listCardByIdUseCase.listCard(id);
    return res.status(200).json({
      msg: 'card by id are here',
      card
    });

  } catch (error) {
    if (error) {
      return res.json(400).json({
        msg: 'some error ocurred'
      });
    }
  }
};
