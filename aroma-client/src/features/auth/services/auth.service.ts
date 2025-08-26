import { TypeMessage } from '@/shared/api/api.type'
import { axiosClassic } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

import {
  TypeAccessToken,
  TypeAuth,
  TypeGenerateCode,
  TypeResponseAuth
} from '../model/auth.type'

export const AuthService = {
  generateCode: async (data: TypeGenerateCode): Promise<TypeMessage> =>
    (await axiosClassic.post(API_ENDPOINTS.generateCode(), data)).data,

  auth: async (data: TypeAuth): Promise<TypeResponseAuth> =>
    (await axiosClassic.post(API_ENDPOINTS.auth(), data)).data,

  signOut: async (): Promise<TypeMessage> =>
    (await axiosClassic.post(API_ENDPOINTS.signOut())).data,

  refresh: async (): Promise<TypeAccessToken> =>
    (await axiosClassic.get(API_ENDPOINTS.refresh())).data
}
