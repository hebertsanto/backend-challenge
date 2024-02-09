import { main } from './adpaters/database/con.prisma';
import { AppRoutes } from './http/express';

AppRoutes.initialize();
main();
