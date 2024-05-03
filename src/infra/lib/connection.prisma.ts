import { prisma } from './prisma';
import { logger } from '../helpers/logger';

export async function main() {}
main()
  .then(() => {
    logger.info('Prisma is running');
    prisma.$disconnect();
  })
  .catch((error) => {
    console.log(error);
    prisma.$disconnect();
  });
