import AppError from './app-error'

export class Unauthorized extends AppError {
  constructor(message: string) {
    super(message, 401)
  }
}
