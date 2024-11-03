import { PrismaClient, User } from '@prisma/client'
import { IUserRepositoryInterface } from './UserRepository.interface'

const prisma = new PrismaClient()

export class UserRepository implements IUserRepositoryInterface {
  async create(data: {
    name: string
    email: string
    password: string
  }): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    })
    return newUser
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    })
    return user
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }

  async update(
    id: string,
    data: {
      name: string
      email: string
      password: string
    },
  ): Promise<User> {
    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    })
    return updatedUser
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } })
  }
}
