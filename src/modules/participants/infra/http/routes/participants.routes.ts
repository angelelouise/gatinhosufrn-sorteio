import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ParticipantsController from '../controllers/ParticipantsController';

const participantsRouter = Router();

const participantsController = new ParticipantsController();

participantsRouter.post(
  '/',
  ensureAuthenticated,
  participantsController.create,
);

participantsRouter.get('/', ensureAuthenticated, participantsController.index);

export default participantsRouter;
