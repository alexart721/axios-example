import { AxiosError, AxiosRequestConfig } from 'axios';
import getConfig from 'next/config'
import { userClient as user } from '../../../clients';

const { publicRuntimeConfig } = getConfig()

export const userClient = user({
  host: publicRuntimeConfig.apiBaseUrl,
  requestInterceptor: {
    fulfilled: (config: AxiosRequestConfig) => {
      // Do something before request is sent
      const token = window.sessionStorage.getItem('token')
      config.headers['Authorization'] = token

      return config
    },
    rejected: (error: AxiosError) => {
      // Do something with request error
      return Promise.reject(error)
    },
  },
})
