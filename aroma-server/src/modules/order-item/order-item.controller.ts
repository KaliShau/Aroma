import { Controller, Get } from '@nestjs/common'
import { OrderItemService } from './order-item.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { User } from '../auth/decorators/user.decorator'

@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Auth('user')
  @Get('count')
  async getCountAll(@User('id') id: string) {
    return this.orderItemService.getUserAll(id)
  }
}
