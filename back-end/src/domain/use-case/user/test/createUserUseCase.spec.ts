import { CreateUserUseCase } from '../createUserUseCase'
import { UserRepositoryMock } from '@/domain/repositories/user/userRepositoryMock'

describe('CreateUserUseCase', () => {
  let userRepositoryMock: UserRepositoryMock
  let createUserUseCase: CreateUserUseCase

  beforeEach(() => {
    userRepositoryMock = new UserRepositoryMock()
    createUserUseCase = new CreateUserUseCase(userRepositoryMock)
  })

  it('should be able to create a new user', async () => {
    const newUser = {
      name: 'Caio Magnesio',
      email: 'caio@gmail.com',
      password: 'caio123',
    }

    const findByEmail = await userRepositoryMock.findByEmail(newUser.email)
    expect(findByEmail).toBeNull()

    const newUserCreated = await createUserUseCase.execute(newUser)

    expect(newUserCreated).toHaveProperty('id')
    expect(newUserCreated.name).toBe(newUser.name)
    expect(newUserCreated.email).toBe(newUser.email)
  })

  it('should not create a new user if email already exist', async () => {
    userRepositoryMock.users.push({
      id: '1',
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'user',
    })

    const userData = {
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'password123',
    }
    try {
      await createUserUseCase.execute(userData)
    } catch (error) {
      expect(error.message).toBe('User already exists')
    }
  })
})
