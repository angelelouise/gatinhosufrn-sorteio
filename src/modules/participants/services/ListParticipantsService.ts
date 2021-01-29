import { injectable, inject } from 'tsyringe';

import Participant from '../infra/typeorm/entities/Participant';
import IParticipantsRepository from '../repositories/IParticipantsRepository';

@injectable()
class CreateParticipantService {
  constructor(
    @inject('ParticipantsRepository')
    private participantsRepository: IParticipantsRepository,
  ) {}

  public async execute(): Promise<Participant[]> {
    const participant = await this.participantsRepository.findAllParticipants();

    return participant;
  }
}

export default CreateParticipantService;
