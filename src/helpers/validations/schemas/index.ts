import { z } from 'zod';

export const createAccountValidationSchema = z.object({
  email: z.string().email('Type a valid email'),
  password: z.string().min(8, 'Password must have at least 6 characters'),
});

export const createCardValidationSchema = z.object({
  amount: z.number(),
  id_account: z.string().uuid(),
});

export const createTransactionValidationSchema = z.object({
  ammout: z.string(),
  card_id: z.string().uuid(),
});
