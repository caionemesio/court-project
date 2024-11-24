import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function main() {
  const salt = await bcrypt.genSalt()

  const passwordHash = await bcrypt.hash('123123', salt)
  const passwordHashAdmin = await bcrypt.hash('admin123', salt)

  await prisma.user.create({
    data: {
      email: 'caio@example.com',
      name: 'Caio Magnesio',
      password: passwordHash,
      role: 'user',
      schedules: {
        create: [
          {
            title: 'Futebol de terça',
            description: 'Partida semanal',
            date: new Date('2024-11-25T19:00:00.000Z'),
            startHour: '19:00',
            endHour: '21:00',
            sport: 'Soccer',
            status: 'pending',
          },
        ],
      },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      name: 'Admin',
      password: passwordHashAdmin,
      role: 'admin',
    },
  })

  await prisma.schedule.create({
    data: {
      title: 'Basquete de domingo',
      description: 'Partida amistosa',
      date: new Date('2024-11-26T15:00:00.000Z'),
      startHour: '15:00',
      endHour: '17:00',
      sport: 'Basketball',
      userId: user2.id,
      status: 'accepted',
    },
  })

  console.log('Seed finalizada com sucesso!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
