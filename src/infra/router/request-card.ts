import { Router } from 'express';
import { createCardRequestHanlder } from '../http/controllers/card-request/create';

export const requestCard = Router();

requestCard.post('/create', createCardRequestHanlder);

requestCard.get('/status');
