export type TypePaymentRequest = {
  items: TypePaymentItem[]
}

export type TypePaymentItem = {
  coffeeId: string
  quantity: number
}

export type TypePaymentResponse = {
  orderId: string
  paymentId: string
  confirmationUrl: string
  total: number
}
