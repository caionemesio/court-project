import { LoginUserUseCase } from '../loginUserUseCase'
import { UserRepositoryMock } from '@/domain/repositories/user/userRepositoryMock'
import bcrypt from 'bcrypt'

describe('LoginUserUseCase', () => {
  let userRepositoryMock: UserRepositoryMock
  let loginUserUseCase: LoginUserUseCase

  beforeEach(() => {
    userRepositoryMock = new UserRepositoryMock()
    loginUserUseCase = new LoginUserUseCase(userRepositoryMock)
  })

  it('should be able to login a user', async () => {
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash('password123', salt)
    const newUser = {
      id: '1',
      name: 'John Doe',
      email: 'teste@teste.com',
      password: passwordHash,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'user',
    }

    userRepositoryMock.users.push(newUser)

    const userByEmail = await userRepositoryMock.findByEmail(newUser.email)
    expect(userByEmail).toHaveProperty('id')

    const checkPassword = await bcrypt.compare(
      'password123',
      userByEmail.password,
    )

    expect(checkPassword).toBe(true)

    await loginUserUseCase.execute({
      email: userByEmail.email,
      password: 'password123',
    })

    expect(userRepositoryMock.users.length).toBe(1)
    expect(userRepositoryMock.users[0].email).toBe(userByEmail.email)
    expect(userRepositoryMock.users[0].password).toBe(userByEmail.password)
  })

  it('should return an error if user is not found', async () => {
    const invalidEmail = 'notfound@teste.com'

    await expect(
      loginUserUseCase.execute({
        email: invalidEmail,
        password: 'password123',
      }),
    ).rejects.toThrow('User not found')
  })

  it('should return an error if password is incorrect', async () => {
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash('correctPassword', salt)
    const newUser = {
      id: '1',
      name: 'John Doe',
      email: 'teste@teste.com',
      password: passwordHash,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'user',
    }

    userRepositoryMock.users.push(newUser)

    await expect(
      loginUserUseCase.execute({
        email: newUser.email,
        password: 'wrongPassword',
      }),
    ).rejects.toThrow('Incorrect password')
  })

  it('should return an error if email or password is missing', async () => {
    await expect(
      loginUserUseCase.execute({
        email: '',
        password: 'password123',
      }),
    ).rejects.toThrow('User not found')

    await expect(
      loginUserUseCase.execute({
        email: 'teste@teste.com',
        password: '',
      }),
    ).rejects.toThrow('User not found')
  })
})
