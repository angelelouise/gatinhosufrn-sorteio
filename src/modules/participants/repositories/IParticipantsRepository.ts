import Participant from '../infra/typeorm/entities/Participant';
import ICreateParticipantDTO from '../dtos/ICreateParticipantDTO';

export default interface IParticipantsRepository {
  findAllParticipants(): Promise<Participant[]>;
  findById(id: string): Promise<Participant | undefined>;
  findByName(name: string): Promise<Participant | undefined>;
  create(data: ICreateParticipantDTO): Promise<Participant>;
  save(user: Participant): Promise<Participant>;
}
