import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import { env } from '../env'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`Server is running on port ${env.PORT} 🚀`)
  console.log(`${env.API_URL}`)
})
