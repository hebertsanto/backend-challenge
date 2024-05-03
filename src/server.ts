import { main } from './infra/lib/connection.prisma';
import { AppRoutes } from './infra/http/express';

const app = new AppRoutes();

app.start(5000);
main();
