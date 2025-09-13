import { axiosWithAuth } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'
import { TypeCount } from '@/shared/models/count.type'

export const OrderItemService = {
  getOrdersCountUser: async (): Promise<TypeCount> =>
    (await axiosWithAuth.get(API_ENDPOINTS.getOrdersItemsCountUser())).data
}
