import { Router } from 'express';
import { transactionGroupRouter } from './transaction';
import { cardGroupRouter } from './card';
import { accountGroupRouter } from './account';

export const v1Router = Router();

v1Router.use('/transaction', transactionGroupRouter);
v1Router.use('/card', cardGroupRouter);
v1Router.use('/account', accountGroupRouter);
