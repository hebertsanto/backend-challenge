import { prisma } from './prisma';

export async function main() {}
main()
  .then(() => {
    console.log('prisma is running');
    prisma.$disconnect();
  })
  .catch((error ) => {
    console.log(error);
    prisma.$disconnect();
  });
