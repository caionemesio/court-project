import { ScheduleController } from '@/domain/controllers/schedule-controller'
import { ScheduleRepository } from '@/domain/repositories/schedule/schedule.repository'
import { CreateScheduleUseCase } from '../createScheduleUseCase'
import { FindAllSchedulesUseCase } from '../findAllSchedulesUseCase'
import { FindByIdUseCase } from '../findByIdUseCase'
import { DeleteScheduleUseCase } from '../deleteScheduleUseCase'
import { UpdateScheduleUseCase } from '../updateScheduleUseCase'

export const makeScheduleController = (): ScheduleController => {
  const schedule = new ScheduleRepository()
  const createScheduleUseCase = new CreateScheduleUseCase(schedule)
  const findAllSchedulesUseCase = new FindAllSchedulesUseCase(schedule)
  const findByIdScheduleUseCase = new FindByIdUseCase(schedule)
  const updateScheduleUseCase = new UpdateScheduleUseCase(schedule)
  const deleteScheduleUseCase = new DeleteScheduleUseCase(schedule)

  return new ScheduleController(
    createScheduleUseCase,
    findAllSchedulesUseCase,
    findByIdScheduleUseCase,
    deleteScheduleUseCase,
    updateScheduleUseCase,
  )
}
