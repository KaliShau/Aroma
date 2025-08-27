import { useMutation } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'

import { errorCatch } from '@/shared/api/api.helpers'

import { TypeGenerateCode } from '../model/auth.type'
import { AuthService } from '../services/auth.service'

export const useGenerateCode = () => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: TypeGenerateCode) => AuthService.generateCode(data),
    onSuccess: data => {
      toast.success(data.message)
    },
    onError: error => {
      toast.success(errorCatch(error.message))
    }
  })

  return { mutate, isPending, isSuccess }
}
