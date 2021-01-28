import { Request, Response } from 'express';

import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import UserMap from '@modules/users/mappers/UserMap';

export default class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      avatarFilename: req.file.filename,
    });

    const mappedUser = UserMap.toDTO(user);

    return res.json(mappedUser);
  }
}
