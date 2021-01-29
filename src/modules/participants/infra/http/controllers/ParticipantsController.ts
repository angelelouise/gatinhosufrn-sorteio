import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ParticipantMap from '@modules/participants/mappers/ParticipantMap';
import CreateParticipantService from '@modules/participants/services/CreateParticipantService';

export default class ParticipantsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, receipt, phone_number } = req.body;

    const createParticipant = container.resolve(CreateParticipantService);

    const participant = await createParticipant.execute({
      name,
      receipt,
      phone_number,
    });

    const mappedParticipant = ParticipantMap.toDTO(participant);

    return res.json(mappedParticipant);
  }
}
