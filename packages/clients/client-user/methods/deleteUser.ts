import { BASE_URL } from '..'
import { UserClient } from '../types'
import { DeleteUserResponse } from '../types'

export const deleteUser = (base: UserClient) => (id: string) =>
  base.requester.delete<DeleteUserResponse>(`${BASE_URL}/${id}`)
