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

export default participantsRouter;
