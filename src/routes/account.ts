import { Router } from 'express';
import { createAccountController } from '../http/controllers/account/create-account-controller';
import { deleteAccountController } from '../http/controllers/account/delete-account-controller';
import { findAccountByIdController } from '../http/controllers/account/find-account-controller';

export const accountRoute = Router();

accountRoute.post('/create', createAccountController);
accountRoute.get('/:id', findAccountByIdController);
accountRoute.delete('/:id', deleteAccountController);
