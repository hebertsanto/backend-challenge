import express, {  Request, Response } from 'express';
import { router } from '../../routes';
import { ZodError } from 'zod';

export class AppRoutes {
  static initialize() {
    const app = express();
    app.use(express.json());
    app.use(router);
    app.use((error: ZodError, req: Request, res: Response) => {
      if (error instanceof ZodError) {
        return res.status(400).json({
          msg:'some error validatin data',
          error
        });
      }

    });

    app.listen(5000, () => {
      console.log('tudo em cima');
    });
  }
}
