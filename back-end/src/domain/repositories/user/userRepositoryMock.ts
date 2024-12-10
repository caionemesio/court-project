import { User } from '@prisma/client'
import { IUserRepositoryInterface } from './UserRepository.interface'

export class UserRepositoryMock implements IUserRepositoryInterface {
  users: User[] = []

  async create(data: {
    name: string
    email: string
    password: string
  }): Promise<User> {
    const newUser = {
      id: String(this.users.length + 1),
      name: data.name,
      email: data.email,
      password: data.password,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.users.push(newUser)
    return newUser
  }

  findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email)
    return Promise.resolve(user || null)
  }

  update(
    id: string,
    data: { name: string; email: string; password: string },
  ): Promise<User> {
    const userFind = this.users.find(user => user.id === id)
    const updateUser = { ...userFind, ...data }
    this.users = this.users.map(user => (user.id === id ? updateUser : user))
    return Promise.resolve(updateUser)
  }

  findById(id: string): Promise<User> {
    const userById = this.users.find(user => user.id === id)
    return Promise.resolve(userById)
  }

  findAll(): Promise<User[]> {
    return Promise.resolve(this.users)
  }

  delete(id: string): Promise<void> {
    this.users = this.users.filter(user => user.id !== id)
    return Promise.resolve()
  }
}
