import { IUserRepositoryInterface } from '@/domain/repositories/user/UserRepository.interface'
import { User } from '@prisma/client'

export class FindAllUseCase {
  constructor(private userRepository: IUserRepositoryInterface) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll()
    return users
  }
}
