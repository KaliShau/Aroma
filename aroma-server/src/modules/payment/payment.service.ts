import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/core/db/prisma.service'
import { YooKassaService } from './yookassa.service'
import { OrderService } from '../order/order.service'
import { CoffeeService } from '../coffee/coffee.service'
import { CreatePaymentDto } from './dto/create.dto'
import { Decimal } from '@prisma/client/runtime/library'
import { OrderItem, OrderStatus } from '@prisma/client'

@Injectable()
export class PaymentService {
  constructor(
    private prisma: PrismaService,
    private yooKassaService: YooKassaService,
    private orderService: OrderService,
    private coffeeService: CoffeeService
  ) {}

  async createPayment(userId: string, { items }: CreatePaymentDto) {
    const coffeeItems = await this.validateAndGetCoffeeItems(items)
    const total = this.calculateTotal(coffeeItems)

    const result = await this.prisma.$transaction(async tx => {
      const orderItems: OrderItem[] = coffeeItems.map(item => ({
        id: undefined,
        quantity: item.quantity,
        price: item.price,
        total: new Decimal(item.price).times(item.quantity),
        coffeeId: item.coffeeId,
        orderId: undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))

      const order = await this.orderService.create(userId, orderItems, total)

      const payment = await this.yooKassaService.createPayment(
        order.id,
        total.toNumber(),
        `Order coffee #${order.id}`
      )

      await this.orderService.updateStatus(
        order.id,
        OrderStatus.PENDING,
        payment.id
      )

      return {
        order: { ...order, paymentId: payment.id },
        payment,
      }
    })

    return {
      orderId: result.order.id,
      paymentId: result.payment.id,
      confirmationUrl: result.payment.confirmation.confirmation_url,
      total: result.order.total.toNumber(),
    }
  }

  private async validateAndGetCoffeeItems(
    items: Array<{ coffeeId: string; quantity: number }>
  ) {
    if (!items || items.length === 0) {
      throw new BadRequestException('Cart cannot be empty!')
    }

    const coffeeIds = items.map(item => item.coffeeId)
    const coffees = await this.coffeeService.getByIds(coffeeIds)

    if (coffees.length !== coffeeIds.length) {
      throw new NotFoundException('Some coffee items not found!')
    }

    return items.map(item => {
      const coffee = coffees.find(c => c.id === item.coffeeId)
      if (!coffee) {
        throw new NotFoundException(
          `Coffee with id ${item.coffeeId} not found!`
        )
      }

      if (item.quantity <= 0) {
        throw new BadRequestException(
          `Invalid quantity for coffee ${coffee.name}!`
        )
      }

      return {
        coffeeId: item.coffeeId,
        quantity: item.quantity,
        price: coffee.price,
        name: coffee.name,
      }
    })
  }

  private calculateTotal(items: Array<{ quantity: number; price: Decimal }>) {
    return items.reduce((total, item) => {
      return total.plus(new Decimal(item.price).times(item.quantity))
    }, new Decimal(0))
  }

  async handleYooKassaWebhook(webhookData: any) {
    try {
      const { event, object } = webhookData

      if (!event || !object) {
        throw new BadRequestException('Invalid webhook data!')
      }

      const paymentId = object.id
      if (!paymentId) {
        throw new BadRequestException('Payment ID is required!')
      }

      return await this.prisma.$transaction(async tx => {
        const order = await this.orderService.getByPaymentId(paymentId)

        if (!order) {
          throw new NotFoundException('Order not found for this payment!')
        }

        let orderStatus: OrderStatus

        switch (event) {
          case 'payment.waiting_for_capture':
            orderStatus = OrderStatus.PENDING
            break

          case 'payment.succeeded':
            orderStatus = OrderStatus.COMPLETED
            break

          case 'payment.canceled':
            orderStatus = OrderStatus.CANCELLED
            break

          case 'payment.failed':
            orderStatus = OrderStatus.FAILED
            break

          default:
            orderStatus = OrderStatus.PENDING
        }

        await tx.order.update({
          where: { id: order.id },
          data: { status: orderStatus },
        })

        return {
          orderId: order.id,
          paymentId,
          status: orderStatus,
          event,
          success: true,
        }
      })
    } catch (error) {
      throw error
    }
  }
}
