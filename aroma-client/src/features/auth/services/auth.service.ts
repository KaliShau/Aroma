import { TypeMessage } from '@/shared/api/api.type'
import { axiosClassic } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

import {
  TypeAccessToken,
  TypeEntryCode,
  TypeGenerateCode,
  TypeResponseEntryCode
} from '../model/auth.type'

export const AuthService = {
  generateCode: async (data: TypeGenerateCode): Promise<TypeMessage> =>
    (await axiosClassic.post(API_ENDPOINTS.generateCode(), data)).data,

  entryCode: async (data: TypeEntryCode): Promise<TypeResponseEntryCode> =>
    (await axiosClassic.post(API_ENDPOINTS.entryCode(), data)).data,

  signOut: async (): Promise<TypeMessage> =>
    (await axiosClassic.post(API_ENDPOINTS.signOut())).data,

  refresh: async (): Promise<TypeAccessToken> =>
    (await axiosClassic.get(API_ENDPOINTS.refresh())).data
}
