import { Router } from 'express';

export const requestCard = Router();

requestCard.post('/create');

requestCard.get('/status');
