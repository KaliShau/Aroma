import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { errorCatch } from '@/shared/api/api.helpers'
import { cookieTokens } from '@/shared/utils/token.utils'

import { AuthService } from '../services/auth.service'

export const useSignOut = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['sign-out'],
    mutationFn: () => AuthService.signOut(),
    onSuccess: data => {
      cookieTokens.removeAccess()
      queryClient.setQueryData(['user'], null)
      toast.success(data.message)
    },
    onError: error => {
      toast.error(errorCatch(error))
    }
  })

  return { mutate, isPending, isSuccess }
}
