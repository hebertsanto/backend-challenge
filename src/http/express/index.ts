import express from 'express';

export class AppRoutes {
  static initialize() {
    const app = express();
    app.listen(4000, () => {
      console.log('tudo em cima');
    });
  }
}
