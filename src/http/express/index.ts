import express, { Express } from 'express';
import { v1Router } from '../../routes';
import { zodErrorMiddleware } from '../middlewares/zod-error';
import { logsMiddleware } from '../middlewares/logs';
import { logger } from '../../helpers/logger';

export class AppRoutes {
  private expressApp: Express;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.expressApp.use(zodErrorMiddleware);
    this.expressApp.use(logsMiddleware);
  }

  private routes() {
    this.expressApp.use(v1Router);
  }
  public start(port: number) {
    this.expressApp.listen(port, () => {
      logger.info('Sever is running !');
    });
  }
}
