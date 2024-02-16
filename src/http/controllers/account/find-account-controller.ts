import { Request, Response } from 'express';
import {z } from 'zod';
import { MissingParamError, ParamDoesNotExist } from '../../../helpers/error';
import { makeFindAccountUseCase } from '../../../use-cases/factories/make-find-account';

/**
 *deleteAccountController
 * @param {Request } req request object express
 * @param {Response } res response object express
 * @returns { Promise<TAccount | null>} promise to be solved
 */

export const findAccountByIdController = async (
  req: Request,
  res: Response,
) => {
  const  makeFindAccount = await makeFindAccountUseCase();

  const paramsSchema = z.object({
    id: z.string().uuid()
  });

  try {
    const { id } = paramsSchema.parse(req.params);
    const account = await makeFindAccount.findAccountById(id);

    return res.status(200).json({
      msg: 'account deleted successfully',
      account
    });

  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'id account does not exist'
      });
    }
    if (error instanceof MissingParamError) {
      return res.status(400).json({
        msg: 'id account is required',
        error,
      });
    }
  }
};
