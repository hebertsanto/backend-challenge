import { main } from './adpaters/database/con.prisma';
import { AppRoutes } from './http/express';

const app = new AppRoutes();

app.start(5000);
main();
