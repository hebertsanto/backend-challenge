import { Router } from 'express';
import { findAccountByIdController } from '../http/controllers/account/get-by-id';
import { createAccountHandler } from '../http/controllers/account/add';

export const accountGroupRouter = Router();

accountGroupRouter.post('/create', createAccountHandler);
accountGroupRouter.get('/:id', findAccountByIdController);
