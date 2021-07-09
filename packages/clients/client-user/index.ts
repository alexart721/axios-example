import { AxiosPromise } from 'axios'
import { createUserClient } from './createUserClient'
import { getUser, createUser, updateUser, deleteUser } from './methods'
import { User, UserClient as BaseUserClient } from './types'
import {
  UserClientOptions,
  GetUserResponse,
  CreateUserResponse,
  DeleteUserResponse,
  UpdateUserResponse,
} from './types/UserClient'

export const BASE_URL = 'user/v1/'

export default function userClient(options?: UserClientOptions): UserClient {
  const commonOptions = {}

  return createUserClient({
    ...commonOptions,
    ...options,
    methods: {
      getUser,
      updateUser,
      deleteUser,
      createUser,
    },
  })
}

export type UserClient = BaseUserClient & {
  readonly getUser: (id: string) => AxiosPromise<GetUserResponse>
  readonly createUser: (user: User) => AxiosPromise<CreateUserResponse>
  readonly deleteUser: (id: string) => AxiosPromise<DeleteUserResponse>
  readonly updateUser: (id: string, user: User) => AxiosPromise<UpdateUserResponse>
}
