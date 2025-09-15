import { TypeUser } from '@/entities/user'

import { axiosWithAuth } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

import { TypeFileRequest, TypeFileResponse } from '../model/file.type'

export const FileService = {
  saveFile: async (data: TypeFileRequest): Promise<TypeFileResponse> =>
    (
      await axiosWithAuth.post(API_ENDPOINTS.saveFile(data.folder), data.file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    ).data
}
