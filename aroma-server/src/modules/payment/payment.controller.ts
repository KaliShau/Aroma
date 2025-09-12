import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { PaymentService } from './payment.service'
import { CreatePaymentDto } from './dto/create.dto'
import { User } from '../auth/decorators/user.decorator'
import { Auth } from '../auth/decorators/auth.decorator'

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @UsePipes(new ValidationPipe())
  @Auth('user')
  @Post('create')
  async createPayment(@Body() dto: CreatePaymentDto, @User('id') id: string) {
    try {
      const result = await this.paymentService.createPayment(id, dto)

      return {
        success: true,
        ...result,
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Post('webhook/yookassa')
  async handleYooKassaWebhook(@Body() webhookData: any) {
    try {
      const result =
        await this.paymentService.handleYooKassaWebhook(webhookData)
      return result
    } catch (error) {
      throw new BadRequestException(
        `Webhook processing failed: ${error.message}`
      )
    }
  }
}
