import UserController from '@/domain/controllers/user-controller'
import { UserRepository } from '@/domain/repositories/user/userRepository'
import { CreateUserUseCase } from '../createUserUseCase'
import { LoginUserUseCase } from '../loginUserUseCase'
import { FindAllUseCase } from '../findAllUseCase'
import { FindByIdUseCase } from '../findByIdUseCase'
import { DeleteUserUseCase } from '../deleteUserUseCase'
import { UpdateUserUseCase } from '../updateUserUseCase'

export const makeUserController = (): UserController => {
  const userRepository = new UserRepository()
  const createUserUseCase = new CreateUserUseCase(userRepository)
  const loginUserUseCase = new LoginUserUseCase(userRepository)
  const findAllUseCase = new FindAllUseCase(userRepository)
  const findByIdUseCase = new FindByIdUseCase(userRepository)
  const deleteUserUseCase = new DeleteUserUseCase(userRepository)
  const updateUserUseCase = new UpdateUserUseCase(userRepository)

  return new UserController(
    createUserUseCase,
    loginUserUseCase,
    findAllUseCase,
    findByIdUseCase,
    deleteUserUseCase,
    updateUserUseCase,
  )
}
