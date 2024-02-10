import { Request, Response } from 'express';
import { CreateAccountUseCase } from '../../../use-cases/account/create-account-use-case';

export const createAccountController = async(req: Request, res :Response) => {

  const createAccountUseCase = new CreateAccountUseCase();
  const { status } = req.body;

  try {
    const account = await createAccountUseCase.create({ status });
    return res.status(200).json({
      msg: 'account created successfully',
      account
    });
  } catch (error) {
    if (error) {
      return res.status(400).json({
        msg: 'some error ocurred'
      });
    }
  }
};
