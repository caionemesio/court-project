import { makeScheduleController } from '@/domain/use-case/schedule/factory/schedule-factory'
import { verifyJwt } from '@/infrastructure/middleware/verifyJwt'
import { Router } from 'express'

const scheduleRouter = Router()
const scheduleController = makeScheduleController()

scheduleRouter.post(
  '/schedule',
  verifyJwt,
  scheduleController.create.bind(scheduleController),
)
scheduleRouter.get(
  '/schedules',
  verifyJwt,
  scheduleController.findAll.bind(scheduleController),
)

scheduleRouter.get(
  '/schedule/:id',
  verifyJwt,
  scheduleController.findById.bind(scheduleController),
)

scheduleRouter.delete(
  '/schedule/:id',
  verifyJwt,
  scheduleController.delete.bind(scheduleController),
)

scheduleRouter.put(
  '/schedule/:id',
  verifyJwt,
  scheduleController.update.bind(scheduleController),
)

export default scheduleRouter
