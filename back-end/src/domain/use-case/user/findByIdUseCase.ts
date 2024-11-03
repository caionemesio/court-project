import { NotFoundError } from '@/domain/error/not-found'
import { IUserRepositoryInterface } from '@/domain/repositories/user/UserRepository.interface'
import { User } from '@prisma/client'

export class FindByIdUseCase {
  constructor(private userRepository: IUserRepositoryInterface) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new NotFoundError('User not found')
    }

    return user
  }
}
