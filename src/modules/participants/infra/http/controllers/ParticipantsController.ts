import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ParticipantMap from '@modules/participants/mappers/ParticipantMap';
import CreateParticipantService from '@modules/participants/services/CreateParticipantService';
import ListParticipantsService from '@modules/participants/services/ListParticipantsService';

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

  public async index(req: Request, res: Response): Promise<Response> {
    const listParticipants = container.resolve(ListParticipantsService);

    const participants = await listParticipants.execute();

    return res.json(participants);
  }
}
