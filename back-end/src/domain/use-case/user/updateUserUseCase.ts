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

    // Validation logic
    if (data.name && data.name.length < 3) {
      throw new Error('name must have at least 3 characters')
    }

    if (data.email && !data.email.includes('@')) {
      throw new Error('invalid email')
    }

    if (data.password && data.password.length < 6) {
      throw new Error('password must have at least 6 characters')
    }

    const updatedUser = await this.userRepository.update(id, data)
    return updatedUser
  }
}
