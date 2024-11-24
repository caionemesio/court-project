import { IRepository } from '../repository.interface'
import { Schedule } from '@prisma/client'
export interface IScheduleRepositoryInterface extends IRepository<Schedule> {
  create(data: {
    title: string
    description: string
    date: Date
    userId: string
    startHour: string
    endHour: string
    sport: string
  }): Promise<Schedule>
  findById(userId: string): Promise<Schedule[]>
  findByStatus(status: string): Promise<Schedule[]>
  update(
    id,
    data: {
      title: string
      description: string
      date: Date
      userId: string
      startHour: string
      endHour: string
      sport: string
    },
  ): Promise<Schedule>
  updateStatus(id: string, status: string): Promise<Schedule>
}
