import { ICreatePayment, YooCheckout } from '@a2seven/yoo-checkout'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class YooKassaService {
  private checkout: YooCheckout

  constructor(private configService: ConfigService) {
    this.checkout = new YooCheckout({
      shopId: configService.get('YOOKASSA_SHOP_ID'),
      secretKey: configService.get('YOOKASSA_SECRET_KEY'),
    })
  }

  async createPayment(orderId: string, amount: number, description: string) {
    try {
      const idempotenceKey = uuidv4()

      const createPayload: ICreatePayment = {
        amount: {
          value: amount.toFixed(2),
          currency: 'RUB',
        },
        payment_method_data: {
          type: 'bank_card',
        },
        confirmation: {
          type: 'redirect',
          return_url: `${this.configService.get('FRONTEND_URL')}/orders/success/${orderId}`,
        },
        capture: true,
        description: description,
        metadata: {
          orderId: orderId,
        },
      }

      const payment = await this.checkout.createPayment(
        createPayload,
        idempotenceKey
      )

      return payment
    } catch (error) {
      throw error
    }
  }

  async getPaymentStatus(paymentId: string) {
    try {
      const payment = await this.checkout.getPayment(paymentId)
      return payment.status
    } catch (error) {
      throw error
    }
  }
}
