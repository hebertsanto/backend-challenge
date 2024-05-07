import { z } from 'zod';

export const createAccountValidationSchema = z.object({
  email: z.string().email('Type a valid email'),
  password: z.string().min(8, 'Password must have at least 6 characters'),
  cpf: z.string().length(11, 'CPF must have 11 characters'),
});

export const createCardValidationSchema = z.object({
  amount: z.number(),
  id_account: z.string().uuid(),
});

export const createTransactionValidationSchema = z.object({
  ammout: z.string(),
  card_id: z.string().uuid(),
});

export const validateCardRequestSchema = z.object({
  cardType: z.string(),
  deliveryAddress: z.string(),
  userId: z.string().uuid(),
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED']).default('PENDING'),
});
