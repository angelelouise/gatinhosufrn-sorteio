import Participant from '@modules/participants/infra/typeorm/entities/Participant';

export default class ParticipantMap {
  public static toDTO(participant: Participant): any {
    return {
      id: participant.id,
      name: participant.name,
      phone_number: participant.phone_number,
    };
  }
}
