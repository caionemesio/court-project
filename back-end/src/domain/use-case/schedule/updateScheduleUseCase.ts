import { NotFoundError } from '@/domain/error/not-found'
import { IScheduleRepositoryInterface } from '@/domain/repositories/schedule/schedule.repository.interface'
import { Schedule } from '@prisma/client'

export class UpdateScheduleUseCase {
  constructor(private scheduleRepository: IScheduleRepositoryInterface) {}

  async execute(
    id: string,
    data: {
      title: string
      description: string
      date: Date
      userId: string
      hour: string
      sport: string
    },
  ): Promise<Schedule | null> {
    const schedule = await this.scheduleRepository.findById(id)

    if (!schedule) {
      throw new NotFoundError('Schedule not found')
    }

    const scheduleUpdated = await this.scheduleRepository.update(id, data)

    return scheduleUpdated
  }
}
