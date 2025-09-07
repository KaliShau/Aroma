import { useQuery } from '@tanstack/react-query'

import { CoffeeService } from '../services/coffee.service'

export const useCoffeeRandom = (enabled: boolean = true) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['random-coffee'],
    queryFn: () => CoffeeService.getRandom(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000
  })

  return { data, isError, isLoading }
}
