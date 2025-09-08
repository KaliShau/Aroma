import { TypePaginateMenu } from '@/pages-fsd/coffee/menu'

import { TypeCoffee } from '@/entities/coffee'

import { axiosClassic } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

export const CoffeeService = {
  getRandom: async (): Promise<TypeCoffee[]> =>
    (await axiosClassic.get(API_ENDPOINTS.getCoffeeRandom())).data,

  getAll: async (
    page: number,
    category?: string,
    search?: string
  ): Promise<TypePaginateMenu> => {
    const response = await axiosClassic.get(
      API_ENDPOINTS.getCoffeeAll(page, category, search),
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
      }
    )

    return response.data
  },

  getBySlug: async (slug: string): Promise<TypeCoffee> =>
    (await axiosClassic.get(API_ENDPOINTS.getCoffeeBySlug(slug))).data
}
