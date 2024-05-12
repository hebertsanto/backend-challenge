import { main } from './infra/lib/connection.prisma';
import { AppRoutes } from './infra/http/express';

const app : AppRoutes = new AppRoutes();

app.start(5000);
main();
