import { Request, Response } from 'express';

import { container } from 'tsyringe';

import UserMap from '@modules/users/mappers/UserMap';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, username, email, phone_number, password } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      username,
      email,
      phone_number,
      password,
    });

    const mappedUser = UserMap.toDTO(user);

    return res.json(mappedUser);
  }
}
