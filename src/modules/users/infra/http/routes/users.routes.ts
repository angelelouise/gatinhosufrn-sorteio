import { Router } from 'express';

import multer from 'multer';
import { getRepository } from 'typeorm';

import uploadConfig from '@config/upload';

import User from '@modules/users/infra/typeorm/entities/User';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

usersRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const users = getRepository(User);

  const user = await users.findOne({
    where: { id },
  });

  return res.json(user);
});

usersRouter.post('/', upload.single('file_idea'), usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);
export default usersRouter;
