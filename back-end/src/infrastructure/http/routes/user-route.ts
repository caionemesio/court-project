import { makeUserController } from '@/domain/use-case/user/factory/user-factory'
import { verifyAdmin } from '@/infrastructure/middleware/verifyAdmin'
import { verifyJwt } from '@/infrastructure/middleware/verifyJwt'
import { Router } from 'express'

const userRouter = Router()
const userController = makeUserController()

userRouter.post('/register', userController.create.bind(userController))
userRouter.post('/login', userController.login.bind(userController))
userRouter.get(
  '/users',
  verifyAdmin,
  userController.findAll.bind(userController),
)
userRouter.get(
  '/user/:id',
  verifyJwt,
  userController.findById.bind(userController),
)
userRouter.delete(
  '/user/:id',
  verifyJwt,
  userController.delete.bind(userController),
)
userRouter.put(
  '/user/update/:id',
  verifyJwt,
  userController.update.bind(userController),
)

export default userRouter
