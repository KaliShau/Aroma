import { useInfiniteQuery } from '@tanstack/react-query'

import { CoffeeService } from '../services/coffee.service'

export const useCoffeeAdminInfinity = (category?: string, search?: string) => {
  const limit = 5

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfiniteQuery({
    queryKey: ['coffee-admin', category, search],
    queryFn: ({ pageParam = 1 }) =>
      CoffeeService.getAllAdmin(pageParam, category, search, limit.toString()),
    getNextPageParam: lastPage => {
      if (!lastPage.pagination.hasNext) {
        return undefined
      }
      return lastPage.pagination.page + 1
    },
    initialPageParam: 1
  })

  const allOrders = data?.pages.flatMap(page => page.data) || []

  return {
    data: allOrders,
    pages: data?.pages, // Полные страницы данных
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  }
}
