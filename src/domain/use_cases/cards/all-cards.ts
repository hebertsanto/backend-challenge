import { Card } from '@prisma/client';

export interface AllCards {
  all(id_account: string): Promise<Card[] | null>;
}
