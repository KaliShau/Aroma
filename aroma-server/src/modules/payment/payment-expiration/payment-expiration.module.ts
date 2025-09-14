import { Module } from '@nestjs/common'
import { PaymentExpirationService } from './payment-expiration.service'
import { PaymentExpirationController } from './payment-expiration.controller'
import { ScheduleModule } from '@nestjs/schedule'
import { OrderService } from 'src/modules/order/order.service'

@Module({
  controllers: [PaymentExpirationController],
  providers: [PaymentExpirationService, OrderService],
  imports: [ScheduleModule.forRoot()],
})
export class PaymentExpirationModule {}
