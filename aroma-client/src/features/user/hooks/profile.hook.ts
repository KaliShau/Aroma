import { useQuery } from '@tanstack/react-query'

import { UserService } from '../services/user.service'

export const useProfile = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => UserService.profile(),
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000
  })

  const isAuth = !!data

  return { data, isError, isLoading, isAuth }
}
