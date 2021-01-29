import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface RequestDTO {
  name: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    username,
    email,
    phone_number,
    password,
  }: RequestDTO): Promise<User> {
    const checkUserEmailExists = await this.usersRepository.findByEmail(email);
    const checkUsernameExists = await this.usersRepository.findByUsername(
      username,
    );

    if (checkUserEmailExists) {
      throw new AppError('E-mail already exists.');
    }

    if (checkUsernameExists) {
      throw new AppError('Username already exists.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      username,
      email,
      phone_number,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
