import { useInfiniteQuery } from '@tanstack/react-query'

import { OrderService } from '../services/order.service'

export const useOrdersUser = () => {
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
    queryKey: ['orders-user'],
    queryFn: ({ pageParam = 1 }) =>
      OrderService.getOrdersUser(pageParam, limit),
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
