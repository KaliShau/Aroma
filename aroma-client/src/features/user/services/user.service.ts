import { TypeUser } from '@/entities/user'

import { axiosWithAuth } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

export const UserService = {
  profile: async (): Promise<TypeUser> =>
    (await axiosWithAuth.get(API_ENDPOINTS.profile())).data,

  updateAvatar: async (avatarUrl: string): Promise<TypeUser> =>
    (await axiosWithAuth.patch(API_ENDPOINTS.updateAvatar(), { avatarUrl }))
      .data
}
