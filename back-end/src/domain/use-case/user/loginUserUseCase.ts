import AppError from '@/domain/error/app-error'
import { NotFoundError } from '@/domain/error/not-found'
import { IUserRepositoryInterface } from '@/domain/repositories/user/UserRepository.interface'
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'

export class LoginUserUseCase {
  constructor(private userRepository: IUserRepositoryInterface) {}

  async execute(data: { email: string; password: string }): Promise<User> {
    const user = await this.userRepository.findByEmail(data.email)

    if (!user) {
      throw new NotFoundError('User not found')
    }

    const checkPassword = await bcrypt.compare(data.password, user.password)

    if (!checkPassword) {
      throw new AppError('Incorrect password')
    }

    return user
  }
}
