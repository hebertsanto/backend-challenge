import { Router } from 'express';
import { listAllTransactiontionController } from '../http/controllers/transactions/list-all-transaction-controller';
import { createTransactionHandler } from '../http/controllers/transactions/create-transaction-controler';
import { generatePdfTransaction } from '../http/controllers/transactions/list-pdf-crontroller';

export const transactionGroupRouter = Router();

transactionGroupRouter.post('/create', createTransactionHandler);
transactionGroupRouter.get('/all/:id', listAllTransactiontionController);
transactionGroupRouter.get('/:id/file', generatePdfTransaction);
