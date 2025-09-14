import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { OrderStatus } from '@prisma/client'
import { OrderService } from 'src/modules/order/order.service'

@Injectable()
export class PaymentExpirationService {
  private readonly logger = new Logger(PaymentExpirationService.name)

  constructor(private orderService: OrderService) {}

  @Cron(process.env.EXPIRE_SCHEDULE)
  async handleExpiredPayments() {
    this.logger.log('Checking for expired payments...')

    try {
      const now = new Date()

      const expiredOrders =
        await this.orderService.updateManyStatusToFailed(now)

      if (expiredOrders.count > 0) {
        this.logger.log(
          `Updated ${expiredOrders.count} expired orders to FAILED status!`
        )
      } else {
        this.logger.log('No expired payments found!')
      }

      return expiredOrders
    } catch (error) {
      this.logger.error('Error processing expired payments:', error)
      throw error
    }
  }
}
