import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import { env } from '../env'
import userRouter from './routes/user-route'
import { ErrorHandler } from './middleware/errorHandler'
import scheduleRouter from './routes/schedule-route'
import { swaggerDocs } from '../swagger/swagger'

const app = express()

app.use(express.json())
app.use(cors())
swaggerDocs(app)
app.use(userRouter)
app.use(scheduleRouter)
app.use(ErrorHandler)

app.listen(env.PORT, () => {
  console.log(`Server is running:${env.API_URL} 🚀`)
})

app.listen(env.SWAGGER_PORT, () => {
  console.log(`Swagger is running: ${env.SWAGGER_URL} 📚`)
})
