import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import { env } from '../env'
import userRouter from './routes/user-route'
import { ErrorHandler } from './middleware/errorHandler'

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRouter)

app.use(ErrorHandler)

app.listen(3000, () => {
  console.log(`Server is running on port ${env.PORT} 🚀`)
  console.log(`${env.API_URL}`)
})
