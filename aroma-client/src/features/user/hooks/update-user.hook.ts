import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { TypeUpdateUser } from '../model/user.type'
import { UserService } from '../services/user.service'

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  const { data, isPending, mutate, isSuccess } = useMutation({
    mutationKey: ['update-avatar'],
    mutationFn: (data: TypeUpdateUser) => UserService.updateUser(data),
    onError: err => {
      toast.error('Failed update user!')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success('The user is successfully updated!')
    }
  })

  return { data, isPending, mutate, isSuccess }
}
