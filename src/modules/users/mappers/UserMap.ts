import User from '@modules/users/infra/typeorm/entities/User';

export default class UserMap {
  public static toDTO(user: User): any {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      doubt: user.doubt,
      type_registration: user.type_registration,
      file_idea: user.file_idea,
      file_idea_registered: user.file_idea_registered,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}
