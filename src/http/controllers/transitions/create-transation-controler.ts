import { Request, Response } from 'express';
import { CreateTransationUseCase } from '../../../use-cases/transation/create-transation-use-case';

export const CreateTransationController = async(req: Request, res :Response) => {

  const createTransationUseCase = new CreateTransationUseCase();
  const { ammout, card_id } = req.body;

  try {
    const transation = await createTransationUseCase.create( {
      ammout,
      card_id
    });
    return res.status(200).json({
      msg: 'transation created successfully',
      transation
    });
  } catch (error) {
    if (error) {
      return res.status(400).json({
        msg: 'some error ocurred'
      });
    }
  }
};
