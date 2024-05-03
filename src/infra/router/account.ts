import { Router } from 'express';
import { addAccountHandler } from '../http/controllers/account/add';
import { getAccountByIdHandler } from '../http/controllers/account/get';

export const accountGroupRouter = Router();

accountGroupRouter.post('/create', addAccountHandler);
accountGroupRouter.get('/:id', getAccountByIdHandler);
