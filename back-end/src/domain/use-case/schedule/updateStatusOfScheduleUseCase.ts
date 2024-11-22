import { NotFoundError } from '@/domain/error/not-found'
import { IScheduleRepositoryInterface } from '@/domain/repositories/schedule/schedule.repository.interface'

export class UpdateStatusOfScheduleUseCase {
  constructor(private scheduleRepository: IScheduleRepositoryInterface) {}

  async execute(id, status) {
    const scheduleExists = await this.scheduleRepository.findById(id)

    if (!scheduleExists) {
      throw new NotFoundError('Schedule not found')
    }

    const schedule = await this.scheduleRepository.updateStatus(id, status)
    return schedule
  }
}
