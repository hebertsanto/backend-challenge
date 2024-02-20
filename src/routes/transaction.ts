import { Router } from 'express';
import { listAllTransactiontionController } from '../http/controllers/transactions/list-all-transaction-controller';
import { createTransationController } from '../http/controllers/transactions/create-transaction-controler';
import { generatePdfTransaction } from '../http/controllers/transactions/list-pdf-crontroller';

export const transationsRoutes = Router();

transationsRoutes.get('/transaction/all/:id', listAllTransactiontionController);
transationsRoutes.get('/transaction/:id/file', generatePdfTransaction);
transationsRoutes.post('/transaction', createTransationController);
