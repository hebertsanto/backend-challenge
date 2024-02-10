import { Router } from 'express';
import { createAccountController } from '../http/controllers/account/create-account-controller';


export const accountRoute = Router();

accountRoute.post('/account', createAccountController);
