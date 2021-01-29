import { getRepository, Repository } from 'typeorm';

import IParticipantsRepository from '@modules/participants/repositories/IParticipantsRepository';
import ICreateParticipantDTO from '@modules/participants/dtos/ICreateParticipantDTO';

import Participant from '../entities/Participant';

class ParticipantsRepository implements IParticipantsRepository {
  private ormRepository: Repository<Participant>;

  constructor() {
    this.ormRepository = getRepository(Participant);
  }

  public async findAllParticipants(): Promise<Participant[]> {
    const participants = await this.ormRepository.find();

    return participants;
  }

  public async findById(id: string): Promise<Participant | undefined> {
    const participant = await this.ormRepository.findOne(id);

    return participant;
  }

  public async findByName(name: string): Promise<Participant | undefined> {
    const participant = await this.ormRepository.findOne({
      where: { name },
    });

    return participant;
  }

  public async create(
    participantData: ICreateParticipantDTO,
  ): Promise<Participant> {
    const participant = this.ormRepository.create(participantData);

    await this.ormRepository.save(participant);

    return participant;
  }

  public async save(participant: Participant): Promise<Participant> {
    return this.ormRepository.save(participant);
  }
}

export default ParticipantsRepository;
