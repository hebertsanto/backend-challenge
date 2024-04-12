import express from 'express';
import { router } from '../../routes';
import { zodErrorMiddleware } from '../middlewares/zod-error';
import { logsMiddleware } from '../middlewares/logs';
import { env } from '../../env/env';
import { logger } from '../../logger';

export class AppRoutes {
  private static instance: express.Application;

  static initialize() {
    const app = express();
    app.use(express.json());
    app.use(router);
    app.use(zodErrorMiddleware);
    app.use(logsMiddleware);

    app.listen(env.PORT, () => {
      return logger.log({
        level: 'info',
        message: 'Server is running'
      });
    });

    this.instance = app;
  }
  static getInstance(): express.Application {
    if (!this.instance) {
      throw new Error('Application not initialized. Call initialize() first.');
    }

    return this.instance;
  }
}
