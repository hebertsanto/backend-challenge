import { Router } from 'express';
import { listAllTransitionsController } from '../http/controllers/transitions/list-all-transitions-controller';
import { createTransationController } from '../http/controllers/transitions/create-transation-controler';
import { listTransitionByIdController } from '../http/controllers/transitions/list-transition-controller';
import { generatePdfTransaction } from '../http/controllers/transitions/list-pdf-crontroller';

export const transationsRoutes = Router();

transationsRoutes.get('/transaction/all/:id', listAllTransitionsController);
transationsRoutes.get('/transaction/:id/file', generatePdfTransaction);
transationsRoutes.get('/transaction/:id', listTransitionByIdController );
transationsRoutes.post('/transaction', createTransationController);
