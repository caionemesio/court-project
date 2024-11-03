import { NextFunction, Request, Response } from 'express'
import { CreateUserUseCase } from '../use-case/user/createUserUseCase'
import AppError from '../error/app-error'
import { LoginUserUseCase } from '../use-case/user/loginUserUseCase'
import Jwt from 'jsonwebtoken'
import { FindAllUseCase } from '../use-case/user/findAllUseCase'
import { FindByIdUseCase } from '../use-case/user/findByIdUseCase'
import { DeleteUserUseCase } from '../use-case/user/deleteUserUseCase'
import { UpdateUserUseCase } from '../use-case/user/updateUserUseCase'
export default class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private loginUserUseCase: LoginUserUseCase,
    private findAllUseCase: FindAllUseCase,
    private findByIdUseCase: FindByIdUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
  ) {}

  async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { name, email, password } = req.body

    if (!name) {
      throw new AppError('name is required')
    }

    if (!email) {
      throw new AppError('email is required')
    }

    if (!password) {
      throw new AppError('password is required')
    }

    if (password.length < 6) {
      throw new AppError('password must have at least 6 characters')
    }

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      })

      return res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { email, password } = req.body

    if (!email) {
      throw new AppError('email is required')
    }

    if (!password) {
      throw new AppError('password is required')
    }

    try {
      const user = await this.loginUserUseCase.execute({
        email,
        password,
      })
      user.password = undefined
      const token = Jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      })

      return res.status(200).json({ user, token })
    } catch (error) {
      next(error)
    }
  }

  async findAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const users = await this.findAllUseCase.execute()
      users.map(user => {
        user.password = undefined
      })
      if (users) return res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }

  async findById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { id } = req.params

    if (!id) {
      throw new AppError('id is required')
    }

    try {
      const user = await this.findByIdUseCase.execute(id)
      user.password = undefined
      return res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { id } = req.params
    const { name, email, password } = req.body

    if (!name && !email && !password) {
      throw new AppError('at least one field is required')
    }

    if (password && password.length < 6) {
      throw new AppError('password must have at least 6 characters')
    }

    try {
      const user = await this.updateUserUseCase.execute(id, {
        name,
        email,
        password,
      })

      return res.status(200).json({ user })
    } catch (error) {
      next(error)
    }
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { id } = req.params

    if (!id) {
      throw new AppError('id is required')
    }

    try {
      await this.deleteUserUseCase.execute(id)
      return res.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}
