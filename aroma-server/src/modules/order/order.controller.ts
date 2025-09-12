import { Controller, Get, Param } from '@nestjs/common'
import { OrderService } from './order.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { User } from '../auth/decorators/user.decorator'

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Auth('user')
  @Get()
  async getAllUser(@User('id') id: string) {
    return this.orderService.getUserOrders(id)
  }

  @Auth('user')
  @Get('count')
  async getCountUser(@User('id') id: string) {
    return this.orderService.getCountUserOrders(id)
  }

  @Auth('user')
  @Get(':id')
  async getOrder(@User('id') id: string, @Param('id') orderId: string) {
    return this.orderService.getOrderById(orderId, id)
  }
}
