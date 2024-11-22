import AppError from './app-error'

export class Forbidden extends AppError {
  constructor(message: string) {
    super(message, 403)
  }
}
