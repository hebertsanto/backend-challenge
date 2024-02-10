import { Router } from 'express';
import { listAllCardsController } from '../http/controllers/cards/list-all-cards-controller';
import { listAllCardByIdController } from '../http/controllers/cards/list-card-controller';
import { createCardController } from '../http/controllers/cards/create-card-controller';


export const cardRoutes = Router();


cardRoutes.get('/cards', listAllCardsController);
cardRoutes.get('/card/:id', listAllCardByIdController);
cardRoutes.post('card', createCardController);
