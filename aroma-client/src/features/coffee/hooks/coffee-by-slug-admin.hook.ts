import { useQuery } from '@tanstack/react-query'

import { CoffeeService } from '../services/coffee.service'

export const useCoffeeBySlugAdmin = (slug: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['admin', slug],
    queryFn: () => CoffeeService.getBySlugAdmin(slug),
    refetchOnWindowFocus: false
  })

  return { data, isError, isLoading }
}
