import { useQuery } from '@tanstack/react-query'

import { OrderItemService } from '../services/order-item.service'

export const useOrderItemCount = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['order-item-count'],
    queryFn: () => OrderItemService.getOrdersCountUser(),
    refetchOnWindowFocus: false
  })

  return { data, isError, isLoading }
}
