import { Request, Response } from 'express';

import { container } from 'tsyringe';

import UserMap from '@modules/users/mappers/UserMap';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
      username,
      password,
    });

    const mappedUser = UserMap.toDTO(user);

    return res.json({ mappedUser, token });
  }
}
