import { TypeCategoryCoffee } from '@/entities/category-coffee'

import { axiosClassic } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

export const CategoryCoffee = {
  getAll: async (): Promise<TypeCategoryCoffee[]> =>
    (await axiosClassic.get(API_ENDPOINTS.getCategoryCoffeeAll())).data
}
