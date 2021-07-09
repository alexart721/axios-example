import { BASE_URL } from '..'
import { UserClient } from '../types'
import { UpdateUserResponse, User } from '../types'

export const updateUser = (base: UserClient) => (id: string, user: User) =>
  base.requester.put<UpdateUserResponse>(`${BASE_URL}/${id}`, { data: user })
