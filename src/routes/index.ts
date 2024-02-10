import { Router } from 'express';
import { transationsRoutes } from './transations';

export const router = Router();

router.use('/', transationsRoutes);
