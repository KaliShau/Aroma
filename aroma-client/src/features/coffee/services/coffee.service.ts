import { TypeCoffee } from '@/entities/coffee'

import { axiosClassic, axiosWithAuth } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

import { TypePaginateAllCoffees } from '../model/paginate.type'

export const CoffeeService = {
  getRandom: async (): Promise<TypeCoffee[]> =>
    (await axiosClassic.get(API_ENDPOINTS.getCoffeeRandom())).data,

  getAll: async (
    page: number,
    category?: string,
    search?: string,
    limit?: string,
    isCache: boolean = true
  ): Promise<TypePaginateAllCoffees> => {
    const config = isCache
      ? {
          headers: {
            'Cache-Control':
              'public, s-maxage=3600, stale-while-revalidate=86400'
          }
        }
      : undefined

    const response = await axiosClassic.get(
      API_ENDPOINTS.getCoffeeAll(page, category, search, limit),
      config
    )

    return response.data
  },

  getAllAdmin: async (
    page: number,
    category?: string,
    search?: string,
    limit?: string
  ): Promise<TypePaginateAllCoffees> =>
    (
      await axiosWithAuth.get(
        API_ENDPOINTS.getCoffeeAllAdmin(page, category, search, limit)
      )
    ).data,

  getBySlug: async (slug: string): Promise<TypeCoffee> =>
    (await axiosClassic.get(API_ENDPOINTS.getCoffeeBySlug(slug))).data,

  getById: async (id: string): Promise<TypeCoffee> =>
    (await axiosClassic.get(API_ENDPOINTS.getCoffeeById(id))).data,

  getByIds: async (ids: string[]): Promise<TypeCoffee[]> =>
    (await axiosClassic.post(API_ENDPOINTS.getCoffeeByIds(), { ids })).data
}
