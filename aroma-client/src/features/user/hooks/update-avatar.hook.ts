import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { UserService } from '../services/user.service'

export const useUpdateAvatar = () => {
  const queryClient = useQueryClient()

  const { data, isPending, mutate } = useMutation({
    mutationKey: ['update-avatar'],
    mutationFn: (avatarUrl: string) => UserService.updateAvatar(avatarUrl),
    onError: err => {
      toast.error('Failed update avatar!')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success('The avatar is successfully preserved!')
    }
  })

  return { data, isPending, mutate }
}
