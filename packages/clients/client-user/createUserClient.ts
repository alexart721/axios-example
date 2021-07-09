import Axios from 'axios'

import { addMethods, ClientTransporterOptions, CreateClient } from '../client-common'
import { UserClient, UserClientOptions } from './types'

export const createUserClient: CreateClient<
  UserClient,
  UserClientOptions & ClientTransporterOptions
> = (options) => {
  const requester = Axios.create({
    headers: { ...options.headers, 'Content-Type': 'application/json' },
    baseURL: options.host,
  })

  if (options.requestInterceptor) {
    requester.interceptors.request.use(
      options.requestInterceptor.fulfilled,
      options.requestInterceptor.rejected,
    )
  }

  if (options.responseInterceptor) {
    requester.interceptors.response.use(
      options.responseInterceptor.fulfilled,
      options.responseInterceptor.rejected,
    )
  }

  const base = {
    requester,
  }

  const client = addMethods(base, options.methods)
  client.requester = requester

  return client
}