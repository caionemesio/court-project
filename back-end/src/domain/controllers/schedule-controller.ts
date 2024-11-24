import { NextFunction, Request, Response } from 'express'
import { CreateScheduleUseCase } from '../use-case/schedule/createScheduleUseCase'
import { FindAllSchedulesUseCase } from '../use-case/schedule/findAllSchedulesUseCase'
import { FindByIdUseCase } from '../use-case/schedule/findByIdUseCase'
import { NotFoundError } from '../error/not-found'
import { DeleteScheduleUseCase } from '../use-case/schedule/deleteScheduleUseCase'
import { UpdateScheduleUseCase } from '../use-case/schedule/updateScheduleUseCase'
import { UpdateStatusOfScheduleUseCase } from '../use-case/schedule/updateStatusOfScheduleUseCase'
import AppError from '../error/app-error'

export class ScheduleController {
  constructor(
    private createScheduleUseCase: CreateScheduleUseCase,
    private findAllSchedulesUseCase: FindAllSchedulesUseCase,
    private findByIdUseCase: FindByIdUseCase,
    private deleteScheduleUseCase: DeleteScheduleUseCase,
    private updateScheduleUseCase: UpdateScheduleUseCase,
    private updateStatusOfScheduleUseCase: UpdateStatusOfScheduleUseCase,
  ) {}

  async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { title, description, date, startHour, endHour, sport } = req.body
    const userId = req.user.id
    if (!title) {
      throw new AppError('title is required')
    }

    if (!description) {
      throw new AppError('description is required')
    }

    if (!date) {
      throw new AppError('date is required')
    }

    if (!startHour || !endHour) {
      throw new AppError('hour is required')
    }

    if (!sport) {
      throw new AppError('sport is required')
    }

    try {
      const schedule = await this.createScheduleUseCase.execute({
        title,
        description,
        date,
        userId,
        startHour,
        endHour,
        sport,
      })

      return res.status(201).json(schedule)
    } catch (error) {
      next(error)
    }
  }

  async findAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { status } = req.query
    const { role } = req.user

    try {
      const schedules = await this.findAllSchedulesUseCase.execute(
        status as string | undefined,
        role,
      )
      return res.status(200).json(schedules)
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
      throw new NotFoundError('user id not found')
    }

    try {
      const schedule = await this.findByIdUseCase.execute(id)
      return res.status(200).json(schedule)
    } catch (error) {
      next(error)
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { title, description, date, startHour, endHour, sport } = req.body
    const userId = req.user.id
    const { id } = req.params

    if (!id) {
      throw new NotFoundError('id is required')
    }

    try {
      const schedule = await this.updateScheduleUseCase.execute(id, {
        title,
        description,
        date,
        userId,
        startHour,
        endHour,
        sport,
      })

      return res.status(200).json(schedule)
    } catch (error) {
      next(error)
    }
  }

  async updateStatus(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { status } = req.body
    const { id } = req.params

    if (!id) {
      throw new NotFoundError('id is required')
    }

    try {
      const schedule = await this.updateStatusOfScheduleUseCase.execute(
        id,
        status,
      )
      return res.status(200).json(schedule)
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params

    if (!id) {
      throw new NotFoundError('id is required')
    }

    try {
      await this.deleteScheduleUseCase.execute(id)
      res.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}
