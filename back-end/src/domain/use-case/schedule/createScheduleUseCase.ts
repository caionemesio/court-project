import { IScheduleRepositoryInterface } from '@/domain/repositories/schedule/schedule.repository.interface'
import { Schedule } from '@prisma/client'

export class CreateScheduleUseCase {
  constructor(private scheduleRepository: IScheduleRepositoryInterface) {}

  async execute(data: {
    title: string
    description: string
    date: Date
    userId: string
    hour: string
    sport: string
  }): Promise<Schedule> {
    const schedule = await this.scheduleRepository.create(data)
    return schedule
  }
}
