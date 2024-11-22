import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function clearDatabase() {
  await prisma.schedule.deleteMany({})
  await prisma.user.deleteMany({})
}

clearDatabase()
  .then(() => {
    console.log('Database cleared')
    prisma.$disconnect()
  })
  .catch(e => {
    console.error(e)
    prisma.$disconnect()
  })
