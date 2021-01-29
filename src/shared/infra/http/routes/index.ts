import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import participantsRouter from '@modules/participants/infra/http/routes/participants.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/participants', participantsRouter);

export default routes;
