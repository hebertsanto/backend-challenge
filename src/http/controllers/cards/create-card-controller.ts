import { Request, Response  } from 'express';
import { CreateCardUseCase } from '../../../use-cases/card/create-card-use-case';

export const createCardController = async(req: Request, res: Response) => {

  const  createCardUseCase = new CreateCardUseCase();
  const { amount, id_account } = req.body;

  try {
    const card = await createCardUseCase.create({ amount, id_account});
    return res.status(201).json({
      msg: 'card created successfully',
      card
    });
  } catch (error) {
    if (error) {
      return res.status(400).json({
        msg: 'some error occurred'
      });
    }
  }
};
