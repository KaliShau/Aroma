import { Module } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { PaymentController } from './payment.controller'
import { YooKassaService } from './yookassa.service'
import { OrderService } from '../order/order.service'
import { CoffeeService } from '../coffee/coffee.service'
import { CategoryCoffeeService } from '../category-coffee/category-coffee.service'
import { PaymentExpirationModule } from './payment-expiration/payment-expiration.module'

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,
    YooKassaService,
    OrderService,
    CoffeeService,
    CategoryCoffeeService,
  ],
  imports: [PaymentExpirationModule],
})
export class PaymentModule {}
