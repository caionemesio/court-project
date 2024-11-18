import { NextFunction, Request, Response } from 'express'
import Jwt from 'jsonwebtoken'
import { env } from '../env'
import { Unauthorized } from '@/domain/error/unauthorized'

interface DecodedToken {
  id: string
}

export const verifyJwt = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  if (!token) {
    throw new Unauthorized('Unauthorized')
  }

  try {
    const secret = env.JWT_SECRET
    const decoded = Jwt.verify(token, secret) as DecodedToken

    req.user = decoded
    if (!req.user.id) {
      throw new Unauthorized('Unauthorized')
    }

    next()
  } catch (error) {
    throw new Unauthorized('Unauthorized')
    console.error(error)
  }
}
