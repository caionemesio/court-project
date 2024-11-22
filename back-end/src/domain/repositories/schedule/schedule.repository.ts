import { PrismaClient, Schedule, Status } from '@prisma/client'
import { IScheduleRepositoryInterface } from './schedule.repository.interface'

const prisma = new PrismaClient()

export class ScheduleRepository implements IScheduleRepositoryInterface {
  async create(data: {
    title: string
    description: string
    date: Date
    userId: string
    hour: string
    sport: string
  }): Promise<
    Schedule & { user: { id: string; email: string; name: string | null } }
  > {
    const newSchedule = await prisma.schedule.create({
      data: {
        title: data.title,
        description: data.description,
        date: data.date,
        userId: data.userId,
        hour: data.hour,
        sport: data.sport,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    })

    return newSchedule
  }
  findByDate(date: Date): Promise<Schedule[]> {
    const schedule = prisma.schedule.findMany({
      where: {
        date: date,
      },
    })
    return schedule
  }
  async findById(userId: string): Promise<Schedule[]> {
    const schedule = await prisma.schedule.findMany({
      where: {
        userId: userId,
      },
    })
    return schedule
  }
  async findAll(): Promise<
    (Schedule & { user: { id: string; email: string; name: string | null } })[]
  > {
    const schedules = await prisma.schedule.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    })

    return schedules
  }

  async update(
    id: any,
    data: {
      title: string
      description: string
      date: Date
      userId: string
      hour: string
      sport: string
    },
  ): Promise<
    Schedule & { user: { id: string; email: string; name: string | null } }
  > {
    const schedule = await prisma.schedule.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        description: data.description,
        date: data.date,
        userId: data.userId,
        hour: data.hour,
        sport: data.sport,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    })
    return schedule
  }

  updateStatus(id: string, status: Status): Promise<Schedule> {
    const newStatus = prisma.schedule.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    })

    return newStatus
  }

  async delete(id: string): Promise<void> {
    await prisma.schedule.delete({
      where: {
        id: id,
      },
    })
  }
}
