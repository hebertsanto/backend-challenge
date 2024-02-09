import { Request, Response } from 'express';
import { CreateTransationUseCase } from '../../../use-cases/transation/create-transation-use-case';

export const CreateTransationController = async(req: Request, res :Response) => {

  const listAllTransations = new CreateTransationUseCase();
  const { id } = req.params;

  try {
    const listTranstionById = await listAllTransations.findById(id);
    return res.status(200).json({
      msg: 'get stranstition by id successfully',
      listTranstionById
    });
  } catch (error) {
    if (error) {
      return res.status(400).json({
        msg: 'some error ocurred'
      });
    }
  }
};
