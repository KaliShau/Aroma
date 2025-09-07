import { TypeCoffee } from '@/entities/coffee'

import { axiosClassic } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

export const CoffeeService = {
  getRandom: async (): Promise<TypeCoffee[]> =>
    (await axiosClassic.get(API_ENDPOINTS.getCoffeeRandom())).data
}
