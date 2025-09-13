import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import { errorCatch } from '@/shared/api/api.helpers'

import { TypePaymentRequest } from '../model/payment.type'
import { PaymentService } from '../services/payment.service'

export const useCreatePayment = (clearCart: ActionCreatorWithoutPayload) => {
  const dispatch = useDispatch()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['create-payment'],
    mutationFn: (data: TypePaymentRequest) =>
      PaymentService.createPayment(data),
    onSuccess: data => {
      dispatch(clearCart())

      toast.loading('We redirect the payment page ...', {
        duration: 10000
      })

      if (typeof window !== 'undefined')
        window.location.href = data.confirmationUrl
    },
    onError: error => {
      toast.error(errorCatch(error))
    }
  })

  return { mutate, isPending, isSuccess }
}
