import { Router } from 'express';
import { listAllCardsController } from '../http/controllers/cards/list-all-cards-controller';
import { listCardByIdController } from '../http/controllers/cards/list-card-controller';
import { createCardController } from '../http/controllers/cards/create-card-controller';


export const cardRoutes = Router();


cardRoutes.get('/cards/:id/file', listAllCardsController);
cardRoutes.get('/card/:id', listCardByIdController);
cardRoutes.post('/card', createCardController);
