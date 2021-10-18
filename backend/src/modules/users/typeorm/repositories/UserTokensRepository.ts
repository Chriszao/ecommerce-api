import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  public async generateToken(user_id: string): Promise<UserToken> {
    const userToken = this.create({ user_id });

    await this.save(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.findOne({
      where: {
        token,
      },
    });

    return userToken;
  }
}

export default UserTokensRepository;
