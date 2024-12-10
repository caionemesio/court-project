import { DeleteUserUseCase } from '../deleteUserUseCase'
import { UserRepositoryMock } from '@/domain/repositories/user/userRepositoryMock'
import { CreateUserUseCase } from '../createUserUseCase'
describe('DeleteUserUseCase', () => {
  let userRepositoryMock: UserRepositoryMock
  let deleteUserUseCase: DeleteUserUseCase
  let createUserUseCase: CreateUserUseCase

  beforeEach(() => {
    userRepositoryMock = new UserRepositoryMock()
    deleteUserUseCase = new DeleteUserUseCase(userRepositoryMock)
    createUserUseCase = new CreateUserUseCase(userRepositoryMock)
  })

  it('should be able to delete a user', async () => {
    const newUser = {
      name: 'Caio Magnesio',
      email: 'caio@gmail.com',
      password: 'caio123',
    }
    const userByEmail = await userRepositoryMock.findByEmail(newUser.email)
    expect(userByEmail).toBeNull()

    const newUserCreated = await createUserUseCase.execute(newUser)
    expect(newUserCreated).toHaveProperty('id')
    expect(newUserCreated.name).toBe(newUser.name)
    expect(newUserCreated.email).toBe(newUser.email)

    const deleteUser = await deleteUserUseCase.execute(newUserCreated.id)
    expect(userRepositoryMock.users.length).toBe(0)
    expect(deleteUser).toBeUndefined()
  })
})
