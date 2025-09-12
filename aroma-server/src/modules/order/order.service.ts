import { Injectable, NotFoundException } from '@nestjs/common'
import { OrderItem, OrderStatus } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'
import { PrismaService } from 'src/core/db/prisma.service'

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: string, items: OrderItem[], total: Decimal) {
    return this.prisma.order.create({
      data: {
        total,
        userId,
        status: OrderStatus.PENDING,
        items: {
          create: items.map(item => ({
            quantity: item.quantity,
            price: item.price,
            total: item.total,
            coffeeId: item.coffeeId,
          })),
        },
      },
      include: {
        items: {
          include: {
            coffee: true,
          },
        },
      },
    })
  }

  async getOrderById(orderId: string, userId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId, userId },
      include: {
        items: {
          include: {
            coffee: true,
          },
        },
      },
    })

    if (!order) {
      throw new NotFoundException('Order not found!')
    }

    return order
  }

  async getOrderByPaymentId(paymentId: string) {
    const order = await this.prisma.order.findUnique({
      where: { paymentId },
      include: {
        items: {
          include: {
            coffee: true,
          },
        },
        User: true,
      },
    })

    if (!order) {
      throw new NotFoundException('Order not found!')
    }

    return order
  }

  async updateOrderStatus(
    orderId: string,
    status: OrderStatus,
    paymentId?: string
  ) {
    return this.prisma.order.update({
      where: { id: orderId },
      data: {
        status,
        ...(paymentId && { paymentId }),
      },
    })
  }

  async getUserOrders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            coffee: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  async getCountUserOrders(userId: string) {
    const count = await this.prisma.order.count({
      where: { userId },
    })

    return { count }
  }
}
