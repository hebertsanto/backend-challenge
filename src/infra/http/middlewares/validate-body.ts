/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodObject } from 'zod';
import { HttpStatus } from '../../helpers/http/status-code';
import { Request, Response, NextFunction } from 'express';

export const validateBody = (schema: ZodObject<any, any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validationResult = schema.safeParse(req.body);
    if (validationResult.success) {
      next();
    } else {
      return res
        .status(HttpStatus.BadRequest)
        .json({ error: validationResult.error.message });
    }
  };
};
