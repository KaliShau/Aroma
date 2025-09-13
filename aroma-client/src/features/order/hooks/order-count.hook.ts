import { useQuery } from '@tanstack/react-query'

import { OrderService } from '../services/order.service'

export const useOrderCount = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['order-count'],
    queryFn: () => OrderService.getOrdersCountUser(),
    refetchOnWindowFocus: false
  })

  return { data, isError, isLoading }
}
