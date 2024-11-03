import { ConflictError } from '@/domain/error/conflict'
import { IUserRepositoryInterface } from '@/domain/repositories/user/UserRepository.interface'
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
export class CreateUserUseCase {
  constructor(private userRepository: IUserRepositoryInterface) {}

  async execute(data: {
    name: string
    email: string
    password: string
  }): Promise<User> {
    const userAlreadyExist = await this.userRepository.findByEmail(data.email)
    if (userAlreadyExist) {
      throw new ConflictError('User already exists')
    }

    const salt = await bcrypt.genSalt()
    data.password = await bcrypt.hash(data.password, salt)

    const user = await this.userRepository.create(data)
    return user
  }
}
