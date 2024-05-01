import { Response, Request, NextFunction } from 'express';

export const logsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const start = Date.now();

  res.on('finish', () => {
    const ms = Date.now() - start;
    const method = req.method;
    const url = req.originalUrl;
    const status = req.statusCode;

    const timestamp = new Date().toISOString();

    return `[${timestamp}]  - ${method} - ${url} - ${status} - ${ms}`;
  });

  next();
};
