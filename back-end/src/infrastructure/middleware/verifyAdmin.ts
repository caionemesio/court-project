import { Unauthorized } from '@/domain/error/unauthorized'
import { Request, Response, NextFunction } from 'express'
import Jwt from 'jsonwebtoken'
import { DecodedToken } from './verifyJwt'
import { env } from '../env'
import { Forbidden } from '@/domain/error/forbidden'

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  if (!token) {
    return next(new Unauthorized('Unauthorized'))
  }

  try {
    const secret = env.JWT_SECRET
    const decoded = Jwt.verify(token, secret) as DecodedToken

    if (decoded.role !== 'admin') {
      return next(new Forbidden('Access denied: admins only'))
    }

    next()
  } catch (error) {
    console.error(error)
    next(new Unauthorized('Invalid token'))
  }
}
