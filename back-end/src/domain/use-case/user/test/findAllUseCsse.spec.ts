import { FindAllUseCase } from '../findAllUseCase'
import { UserRepositoryMock } from '@/domain/repositories/user/userRepositoryMock'

describe('FindAllUseCase', () => {
  let userRepositoryMock: UserRepositoryMock
  let findAllUseCase: FindAllUseCase

  beforeEach(() => {
    userRepositoryMock = new UserRepositoryMock()
    findAllUseCase = new FindAllUseCase(userRepositoryMock)
  })

  it('should create and show only one user', async () => {
    userRepositoryMock.users.push({
      id: '1',
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'user',
    })

    const showUser = await findAllUseCase.execute()
    expect(showUser.length).toBe(1)
  })
})
