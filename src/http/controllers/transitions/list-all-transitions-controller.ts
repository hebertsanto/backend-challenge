import { Request, Response } from 'express';
import { CreateTransationUseCase } from '../../../use-cases/transation/create-transation-use-case';

export const CreateTransationController = async(req: Request, res :Response) => {

  const listAllTransations = new CreateTransationUseCase();
  const { id } = req.params;

  try {
    const ListOftransation = await listAllTransations.listTransations(id);
    return res.status(200).json({
      msg: 'all transations are available',
      ListOftransation
    });
  } catch (error) {
    if (error) {
      return res.status(400).json({
        msg: 'some error ocurred'
      });
    }
  }
};
