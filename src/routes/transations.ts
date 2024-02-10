import { Router } from 'express';
import { listAllTransitionsController } from '../http/controllers/transitions/list-all-transitions-controller';
import { createTransationController } from '../http/controllers/transitions/create-transation-controler';
import { listTransitionByIdController } from '../http/controllers/transitions/list-transition-controller';

export const transationsRoutes = Router();

transationsRoutes.get('/transations', listAllTransitionsController);
transationsRoutes.get('/transitions/:id', listTransitionByIdController );
transationsRoutes.post('/transitions', createTransationController);
