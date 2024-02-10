import express from 'express';
import { router } from '../../routes';

export class AppRoutes {
  static initialize() {
    const app = express();
    app.use(router);
    app.listen(4000, () => {
      console.log('tudo em cima');
    });
  }
}
