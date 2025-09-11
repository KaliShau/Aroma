import { useQuery } from '@tanstack/react-query'

import { CoffeeService } from '../services/coffee.service'

export const useCoffeeById = (id: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => CoffeeService.getById(id),
    refetchOnWindowFocus: false
  })

  return { data, isError, isLoading }
}
