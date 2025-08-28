import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { errorCatch } from '@/shared/api/api.helpers'
import { cookieTokens } from '@/shared/utils/token.utils'

import { TypeEntryCode } from '../model/auth.type'
import { AuthService } from '../services/auth.service'

export const useEntryCode = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['entry-code'],
    mutationFn: (data: TypeEntryCode) => AuthService.entryCode(data),
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user)
      cookieTokens.setAccess(data.accessToken)

      toast.success('You entered the system!')
    },
    onError: error => {
      toast.error(errorCatch(error))
    }
  })

  return { mutate, isPending, isSuccess }
}
