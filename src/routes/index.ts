import { Router } from 'express';
import { transationsRoutes } from './transaction';
import { cardRoutes } from './card';
import { accountRoute } from './account';

export const router = Router();

router.use('/', transationsRoutes);
router.use('/', cardRoutes);
router.use('/', accountRoute);
