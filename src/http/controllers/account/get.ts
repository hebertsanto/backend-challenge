import { Request, Response } from 'express';
import getAccountByIdFactory from '../../../use-cases/factories/account/find-account-by-id';
import { HandleRequestController } from './add';
import { z } from 'zod';
import { HttpStatus } from '../../../helpers/http/status-code';

export class GetAccount implements HandleRequestController {
  async handle(req: Request, res: Response): Promise<Response> {
    const makeFindAccount = await getAccountByIdFactory();
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    try {
      const account = await makeFindAccount.findById(id);

      return res.status(HttpStatus.Ok).json({
        msg: 'Account found successfully',
        account,
      });
    } catch (error) {
      return res.status(HttpStatus.InternalSeverError).json({
        msg: 'Internal server error',
      });
    }
  }
}

export const getAccountByIdHandler = new GetAccount().handle;
