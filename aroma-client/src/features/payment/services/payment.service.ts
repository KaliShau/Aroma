import { axiosWithAuth } from '@/shared/api/axios.interceptors'
import { API_ENDPOINTS } from '@/shared/configs/api.config'

import { TypePaymentRequest, TypePaymentResponse } from '../model/payment.type'

export const PaymentService = {
  createPayment: async (
    data: TypePaymentRequest
  ): Promise<TypePaymentResponse> =>
    (await axiosWithAuth.post(API_ENDPOINTS.createPayment(), data)).data
}
