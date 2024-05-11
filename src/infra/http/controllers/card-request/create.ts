import { Request, Response } from 'express';
import { HttpStatus } from '../../../helpers/http/status-code';
import { validateBody } from '../../middlewares/validate-body';
import { validateCardRequestSchema } from '../../../helpers/validations/schemas';
import { HandleRequestController } from '../../../helpers/http/htts-interface';
import createCardRequestFactory from '../../../../use-cases/factories/card-request/create-card-request';

export class CreateCardRequest implements HandleRequestController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createCardService = await createCardRequestFactory();
    const { userId, cardType, deliveryAddress } = req.body;

    try {
      const card = await createCardService.request({
        cardType,
        deliveryAddress,
        userId,
        status: 'PENDING',
      });

      return res
        .status(HttpStatus.Create)
        .json({ message: 'Card request sucessfully', card });
    } catch (error) {
      return res
        .status(HttpStatus.InternalSeverError)
        .json({ message: 'Internal Error server' });
    }
  }
}

export const createCardRequestHanlder = [
  validateBody(validateCardRequestSchema),
  new CreateCardRequest().handle,
];
