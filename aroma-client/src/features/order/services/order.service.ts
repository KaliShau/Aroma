import { axiosWithAuth } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'
import { TypeCount } from '@/shared/models/count.type'

import { TypePaginateUserOrders } from '../model/paginate.type'

export const OrderService = {
  getOrdersUser: async (
    page: number,
    limit?: number
  ): Promise<TypePaginateUserOrders> =>
    (await axiosWithAuth.get(API_ENDPOINTS.getOrdersUser(page, limit))).data,

  getOrdersCountUser: async (): Promise<TypeCount> =>
    (await axiosWithAuth.get(API_ENDPOINTS.getOrdersCountUser())).data
}
