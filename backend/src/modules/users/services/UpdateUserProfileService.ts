import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

class UpdateUserProfileService {
  public async execute({
    id,
    name,
    email,
    password,
    old_password,
  }: IUser): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists && emailExists.id !== id) {
      throw new AppError('Email is already in use');
    }

    if (password && !old_password) {
      throw new AppError('Old Password is required');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError('Old Password does not match');
      }

      user.password = await hash(password, 8);
    }

    user.name = name;
    user.email = email;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserProfileService;
