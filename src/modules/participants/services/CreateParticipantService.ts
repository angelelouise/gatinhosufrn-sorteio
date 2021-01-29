import { injectable, inject } from 'tsyringe';

import Participant from '../infra/typeorm/entities/Participant';
import IParticipantsRepository from '../repositories/IParticipantsRepository';

interface RequestDTO {
  name: string;
  receipt: string;
  phone_number: string;
}

@injectable()
class CreateParticipantService {
  constructor(
    @inject('ParticipantsRepository')
    private participantsRepository: IParticipantsRepository,
  ) {}

  public async execute({
    name,
    receipt,
    phone_number,
  }: RequestDTO): Promise<Participant> {
    const participant = await this.participantsRepository.create({
      name,
      receipt,
      phone_number,
    });

    return participant;
  }
}

export default CreateParticipantService;
