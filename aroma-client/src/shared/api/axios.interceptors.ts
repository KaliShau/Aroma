import axios, { CreateAxiosDefaults } from 'axios'

import { cookieTokens } from '../utils/token.utils'
import { errorCatch, getContentType } from './api.helpers'

const options: CreateAxiosDefaults = {
  baseURL: `${process.env.SERVER_URL}/api`,
  headers: getContentType(),
  withCredentials: true
}

export const axiosClassic = axios.create(options)
export const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = cookieTokens.getAccess()

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (error?.response?.status == 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        await AuthService.getNewTokens()
        return axiosWithAuth.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') cookieTokens.removeAccess()
      }
    }

    throw error
  }
)
