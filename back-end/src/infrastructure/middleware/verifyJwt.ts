import { NextFunction, Request, Response } from 'express'
import Jwt from 'jsonwebtoken'
import { env } from '../env'
import { Unauthorized } from '@/domain/error/unauthorized'

export interface DecodedToken {
  id: string
  role: string
}

export const verifyJwt = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  if (!token) {
    throw new Unauthorized('Token not provided')
  }

  try {
    const secret = env.JWT_SECRET
    const decoded = Jwt.verify(token, secret) as DecodedToken

    req.user = decoded

    next()
  } catch (error) {
    console.log(error)
    throw new Unauthorized('Invalid token')
  }
}
