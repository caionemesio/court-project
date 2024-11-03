import { IRepository } from '../repository.interface'
import { User } from '@prisma/client'

export interface IUserRepositoryInterface extends IRepository<User> {
  create(data: { name: string; email: string; password: string }): Promise<User>
  findByEmail(email: string): Promise<User | null>
  update(
    id: string,
    data: { name: string; email: string; password: string },
  ): Promise<User>
}
