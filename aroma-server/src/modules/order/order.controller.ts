import { Controller, Get, Param, Query } from '@nestjs/common'
import { OrderService } from './order.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { User } from '../auth/decorators/user.decorator'
import { PaginationOrderDto } from './dto/paginated-order.dto'

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Auth('user')
  @Get()
  async getAllUser(
    @User('id') userId: string,
    @Query() query: PaginationOrderDto
  ) {
    return this.orderService.getByUser(query, userId)
  }

  @Auth('user')
  @Get('count')
  async getCountUser(@User('id') id: string) {
    return this.orderService.getCountUser(id)
  }

  @Auth('user')
  @Get(':id')
  async getOrder(@User('id') id: string, @Param('id') orderId: string) {
    return this.orderService.getById(orderId, id)
  }
}
