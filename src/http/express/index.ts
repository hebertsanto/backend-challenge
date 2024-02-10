import express from 'express';
import { router } from '../../routes';

export class AppRoutes {
  static initialize() {
    const app = express();
    app.use(express.json());
    app.use(router);
    app.listen(5000, () => {
      console.log('tudo em cima');
    });
  }
}
