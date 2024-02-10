import { Router } from 'express';
import { transationsRoutes } from './transations';
import { cardRoutes } from './card';

export const router = Router();

router.use('/', transationsRoutes);
router.use('/', cardRoutes);
