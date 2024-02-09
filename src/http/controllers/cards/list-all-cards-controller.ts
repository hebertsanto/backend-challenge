import { Request, Response } from 'express';
import { ListCardsUseCase } from '../../../use-cases/card/list-all-cards-use-case';


export const ListAllCardsController = async(req: Request, res: Response) => {

  const listAllCardsUseCase = new ListCardsUseCase();
  const { id } = req.params;

  try {
    const cards = await listAllCardsUseCase.listAllCards(id);
    return res.status(200).json({
      msg: 'all cards here',
      cards
    });

  } catch (error) {
    if (error) {
      return res.json(400).json({
        msg: 'some error ocurred'
      });
    }
  }
};
