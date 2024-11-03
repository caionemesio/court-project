import { makeUserController } from '@/domain/use-case/user/factory/user-factory'
import { Router } from 'express'

const userRouter = Router()
const userController = makeUserController()

userRouter.post('/register', userController.create.bind(userController))
userRouter.post('/login', userController.login.bind(userController))
userRouter.get('/users', userController.findAll.bind(userController))
userRouter.get('/user/:id', userController.findById.bind(userController))
userRouter.delete('/user/:id', userController.delete.bind(userController))
userRouter.put('/user/update/:id', userController.update.bind(userController))

export default userRouter
