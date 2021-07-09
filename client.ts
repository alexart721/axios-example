import getConfig from 'next/config'

import { booking } from '@clinia/client/booking'

const { publicRuntimeConfig } = getConfig()

export const bookingClient = booking({
  host: publicRuntimeConfig.apiBaseUrl,
  requestInterceptor: {
    fulfilled: (config) => {
      // Do something before request is sent
      const workspaceId = window.sessionStorage.getItem('workspace')
      config.headers['x-clinia-cloud-workspace-id'] = workspaceId

      return config
    },
    rejected: (error) => {
      // Do something with request error
      return Promise.reject(error)
    },
  },
})

