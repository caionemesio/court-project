export interface IRepository<T> {
  create(data: T): Promise<T>
  findById(id: string): Promise<T | T[]>
  findAll(): Promise<T[]>
  update(id: string, data: T): Promise<T | null>
  delete(id: string): Promise<void>
}
