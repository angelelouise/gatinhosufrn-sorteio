import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IParticipantsRepository from '@modules/participants/repositories/IParticipantsRepository';
import ParticipantsRepository from '@modules/participants/infra/typeorm/repositories/ParticipantsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IParticipantsRepository>(
  'ParticipantsRepository',
  ParticipantsRepository,
);
