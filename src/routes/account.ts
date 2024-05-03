import { Router } from 'express';
import { findAccountByIdController } from '../http/controllers/account/get-by-id';
import { addAccountHandler } from '../http/controllers/account/add';

export const accountGroupRouter = Router();

accountGroupRouter.post('/create', addAccountHandler);
accountGroupRouter.get('/:id', findAccountByIdController);
