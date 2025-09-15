import { useQuery } from '@tanstack/react-query'

import { OrderService } from '../services/order.service'

export const useOrderById = (id: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`order`, id],
    queryFn: () => OrderService.getOrderById(id),
    refetchOnWindowFocus: false
  })

  return { data, isError, isLoading }
}
