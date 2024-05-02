import { Router } from 'express';
import { listAllCardsController } from '../http/controllers/cards/list-all-cards-controller';
import { listCardByIdController } from '../http/controllers/cards/list-card-controller';
import { createCardHandler } from '../http/controllers/cards/create-card-controller';

export const cardGroupRouter = Router();

cardGroupRouter.post('/create', createCardHandler);
cardGroupRouter.get('/:id/file', listAllCardsController);
cardGroupRouter.get('/:id', listCardByIdController);
