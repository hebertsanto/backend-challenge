import { Router } from 'express';
import { transationsRoutes } from './transaction';
import { cardRoutes } from './card';
import { accountRoute } from './account';

export const v1Router = Router();

v1Router.use('/api/v1/transaction', transationsRoutes);
v1Router.use('/api/v1/card', cardRoutes);
v1Router.use('/api/v1/account', accountRoute);
