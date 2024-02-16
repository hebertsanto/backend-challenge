import { Router } from 'express';
import { createAccountController } from '../http/controllers/account/create-account-controller';
import { deleteAccountController } from '../http/controllers/account/delete-account-controller';

export const accountRoute = Router();

accountRoute.post('/account', createAccountController);
accountRoute.delete('/account/:id', deleteAccountController);
