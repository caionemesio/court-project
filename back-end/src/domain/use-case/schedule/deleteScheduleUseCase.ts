import { IScheduleRepositoryInterface } from '@/domain/repositories/schedule/schedule.repository.interface'

export class DeleteScheduleUseCase {
  constructor(private scheduleRepository: IScheduleRepositoryInterface) {}

  async execute(id: string): Promise<void> {
    await this.scheduleRepository.delete(id)
  }
}
