import { BASE_URL } from '..'
import { UserClient } from '../types'
import { CreateUserResponse, User } from '../types'

export const createUser = (base: UserClient) => (user : User) =>
  base.requester.post<CreateUserResponse>(BASE_URL, { data: user })
