import { Router } from 'express';
import { transactionGroupRouter } from './transaction';
import { cardGroupRouter } from './card';
import { accountGroupRouter } from './account';

export const v1Router = Router();

v1Router.use('/api/v1/transaction', transactionGroupRouter);
v1Router.use('/api/v1/card', cardGroupRouter);
v1Router.use('/api/v1/account', accountGroupRouter);
