import { IUserRepositoryInterface } from '@/domain/repositories/user/UserRepository.interface'

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepositoryInterface) {}

  async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new Error('User not found')
    }

    await this.userRepository.delete(id)
  }
}
