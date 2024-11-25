import { Forbidden } from '@/domain/error/forbidden'
import { IScheduleRepositoryInterface } from '@/domain/repositories/schedule/schedule.repository.interface'
import { Schedule } from '@prisma/client'

export class FindAllSchedulesUseCase {
  constructor(private scheduleRepository: IScheduleRepositoryInterface) {}

  async execute(status: string | undefined, role: string): Promise<Schedule[]> {
    if (role === 'user') {
      if (status !== 'accepted') {
        throw new Forbidden(
          "Users are only allowed to view 'accepted' schedules",
        )
      }
      return this.scheduleRepository.findByStatus(status)
    }

    if (role === 'admin') {
      if (status) {
        return this.scheduleRepository.findByStatus(status)
      }
      return this.scheduleRepository.findAll()
    }

    throw new Forbidden('Invalid role or insufficient permissions')
  }
}
