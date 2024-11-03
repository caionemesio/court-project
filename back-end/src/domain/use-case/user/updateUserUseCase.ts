import { IUserRepositoryInterface } from '@/domain/repositories/user/UserRepository.interface'
import { User } from '@prisma/client'

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepositoryInterface) {}

  async execute(
    id: string,
    data: { name: string; email: string; password: string },
  ): Promise<User> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new Error('User not found')
    }

    const updatedUser = await this.userRepository.update(id, data)
    return updatedUser
  }
}
