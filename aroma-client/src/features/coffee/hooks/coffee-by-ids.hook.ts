import { useQuery } from '@tanstack/react-query'

import { CoffeeService } from '../services/coffee.service'

export const useCoffeeByIds = (ids: string[]) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [ids],
    queryFn: () => CoffeeService.getByIds(ids),
    refetchOnWindowFocus: false
  })

  return { data, isError, isLoading }
}
