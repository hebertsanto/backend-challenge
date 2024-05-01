import { Router } from 'express';
import { listAllTransactiontionController } from '../http/controllers/transactions/list-all-transaction-controller';
import { createTransationController } from '../http/controllers/transactions/create-transaction-controler';
import { generatePdfTransaction } from '../http/controllers/transactions/list-pdf-crontroller';

export const transationsRoutes = Router();

transationsRoutes.post('/create', createTransationController);
transationsRoutes.get('/all/:id', listAllTransactiontionController);
transationsRoutes.get('/:id/file', generatePdfTransaction);
