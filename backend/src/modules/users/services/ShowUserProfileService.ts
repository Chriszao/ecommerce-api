import AppError from '@shared/errors/AppError';
import { classToClass } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class ShowUserProfileService {
  public async execute(id: string): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return classToClass(user);
  }
}

export default ShowUserProfileService;
