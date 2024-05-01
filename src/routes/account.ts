import { Router } from 'express';
import { deleteAccountController } from '../http/controllers/account/delete-account-controller';
import { findAccountByIdController } from '../http/controllers/account/find-account-controller';
import { createAccountHandler } from '../http/controllers/account/create-account-controller';

export const accountRoute = Router();

accountRoute.post('/create', createAccountHandler);
accountRoute.get('/:id', findAccountByIdController);
accountRoute.delete('/:id', deleteAccountController);
