import { BASE_URL } from '..'
import { UserClient } from '../types'
import { GetUserResponse } from '../types/UserClient'

export const getUser = (base: UserClient) => (id: string) =>
  base.requester.get<GetUserResponse>(`${BASE_URL}/${id}`)
