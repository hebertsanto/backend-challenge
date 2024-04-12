import 'dotenv/config';
import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3000),

});

const _env = envSchema.safeParse(process.env);

if (_env.success == false) {
  throw new Error('Some error ocurred with env variables');
}

export const env = _env.data;

