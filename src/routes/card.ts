import { Router } from 'express';
import { createCardHanlder } from '../http/controllers/cards/add';
import { getCardByIdHandler } from '../http/controllers/cards/get';
import { getAllCardByUserIdHandler } from '../http/controllers/cards/all';

export const cardGroupRouter = Router();

cardGroupRouter.post('/create', createCardHanlder);
cardGroupRouter.get('/:id/file', getAllCardByUserIdHandler);
cardGroupRouter.get('/:id', getCardByIdHandler);
