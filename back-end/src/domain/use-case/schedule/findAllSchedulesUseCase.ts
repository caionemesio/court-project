import { IScheduleRepositoryInterface } from '@/domain/repositories/schedule/schedule.repository.interface'
import { Schedule } from '@prisma/client'

export class FindAllSchedulesUseCase {
  constructor(private scheduleRepository: IScheduleRepositoryInterface) {}

  async execute(): Promise<Schedule[]> {
    const schedules = await this.scheduleRepository.findAll()
    return schedules
  }
}
