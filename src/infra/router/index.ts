import { Router } from 'express';
import { requestCard } from './request-card';
import { accountGroupRouter } from './account';

export const v1Router = Router();

v1Router.use('/request/card', requestCard);
v1Router.use('/account', accountGroupRouter);

