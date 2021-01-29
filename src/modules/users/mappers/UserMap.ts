import User from '@modules/users/infra/typeorm/entities/User';

export default class UserMap {
  public static toDTO(user: User): any {
    return {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}
