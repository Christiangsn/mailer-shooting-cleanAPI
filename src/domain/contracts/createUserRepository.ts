import { IUserData } from '@domain/models/userData'

export interface ICreateUserRepositoryContract {
  create: (user: ICreateUserRepository.Input) => Promise<void>
}

export namespace ICreateUserRepository {
  export type Input = IUserData
}
