import { useQuery } from '@tanstack/react-query'

import { CoffeeService } from '../services/coffee.service'

export const useCoffeeBySlug = (slug: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [slug],
    queryFn: () => CoffeeService.getBySlug(slug),
    refetchOnWindowFocus: false
  })

  return { data, isError, isLoading }
}
