import { Router } from 'express';
import { listAllCardsController } from '../http/controllers/cards/list-all-cards-controller';
import { listCardByIdController } from '../http/controllers/cards/list-card-controller';
import { createCardHanlder } from '../http/controllers/cards/add-card';

export const cardGroupRouter = Router();

cardGroupRouter.post('/create', createCardHanlder);
cardGroupRouter.get('/:id/file', listAllCardsController);
cardGroupRouter.get('/:id', listCardByIdController);
