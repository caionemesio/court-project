import { UpdateUserUseCase } from '../updateUserUseCase'
import { UserRepositoryMock } from '@/domain/repositories/user/userRepositoryMock'

describe('UpdateUserUseCase', () => {
  let userRepositoryMock: UserRepositoryMock
  let updateUserUseCase: UpdateUserUseCase

  beforeEach(() => {
    userRepositoryMock = new UserRepositoryMock()
    updateUserUseCase = new UpdateUserUseCase(userRepositoryMock)
  })

  it('should be able to update a user', async () => {
    const newUser = {
      id: '1',
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'user',
    }

    await userRepositoryMock.users.push(newUser)

    const updatedUserData = {
      name: 'John Updated',
      email: 'updated@teste.com',
      password: 'newpassword123',
    }

    const updatedUser = await updateUserUseCase.execute(
      newUser.id,
      updatedUserData,
    )

    expect(updatedUser.name).toBe(updatedUserData.name)
    expect(updatedUser.email).toBe(updatedUserData.email)
    expect(userRepositoryMock.users[0].name).toBe(updatedUserData.name)
    expect(userRepositoryMock.users[0].email).toBe(updatedUserData.email)
  })

  it('should throw an error if user is not found', async () => {
    await expect(
      updateUserUseCase.execute('non-existent-id', {
        name: 'Nonexistent',
        email: 'nonexistent@teste.com',
        password: 'password123',
      }),
    ).rejects.toThrow('User not found')
  })

  it('should throw an error if required fields are invalid', async () => {
    const newUser = {
      id: '1',
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'user',
    }

    await userRepositoryMock.users.push(newUser)

    const invalidData = {
      name: '',
      email: 'invalidemail',
      password: '123',
    }

    await expect(
      updateUserUseCase.execute(newUser.id, invalidData),
    ).rejects.toThrow('invalid email')

    invalidData.name = 'Valids Names'
    await expect(
      updateUserUseCase.execute(newUser.id, invalidData),
    ).rejects.toThrow('invalid email')

    invalidData.email = 'valid@teste.com'
    await expect(
      updateUserUseCase.execute(newUser.id, invalidData),
    ).rejects.toThrow('password must have at least 6 characters')
  })
})
