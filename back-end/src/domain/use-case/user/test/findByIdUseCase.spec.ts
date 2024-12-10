import { FindByIdUseCase } from '../findByIdUseCase'
import { UserRepositoryMock } from '@/domain/repositories/user/userRepositoryMock'

describe('FindByIdUseCase', () => {
  let userRepositoryMock: UserRepositoryMock
  let findByIdUseCase: FindByIdUseCase

  beforeEach(() => {
    userRepositoryMock = new UserRepositoryMock()
    findByIdUseCase = new FindByIdUseCase(userRepositoryMock)
  })

  it('should be able to find a user by id', async () => {
    userRepositoryMock.users.push({
      id: '1',
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'user',
    })

    const userById = await findByIdUseCase.execute('1')
    expect(userById).toHaveProperty('id')
  })
})
