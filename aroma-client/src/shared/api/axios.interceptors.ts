import axios, { CreateAxiosDefaults } from 'axios'

import { AuthService } from '@/features/auth/services/auth.service'

import { CONFIG_ENV } from '../configs/env.config'
import { cookieTokens } from '../utils/token.utils'
import { errorCatch, getContentType } from './api.helpers'

const options: CreateAxiosDefaults = {
  baseURL: `${CONFIG_ENV.SERVER_URL}/api`,
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
        const token = await AuthService.refresh()
        if (token.accessToken) {
          cookieTokens.setAccess(token.accessToken)
          originalRequest.headers.Authorization = `Bearer ${token.accessToken}`
          return axiosWithAuth.request(originalRequest)
        }
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') cookieTokens.removeAccess()
      }
    }

    throw error
  }
)
