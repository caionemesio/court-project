import { IScheduleRepositoryInterface } from '@/domain/repositories/schedule/schedule.repository.interface'
import { Schedule } from '@prisma/client'

export class FindByIdUseCase {
  constructor(private scheduleRepository: IScheduleRepositoryInterface) {}

  async execute(userId: string): Promise<Schedule[]> {
    const schedule = await this.scheduleRepository.findById(userId)
    return schedule
  }
}
