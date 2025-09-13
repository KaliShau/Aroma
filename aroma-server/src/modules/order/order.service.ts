import { Injectable, NotFoundException } from '@nestjs/common'
import { OrderItem, OrderStatus } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'
import { PrismaService } from 'src/core/db/prisma.service'
import { PaginationOrderDto } from './dto/paginated-order.dto'

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, items: OrderItem[], total: Decimal) {
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

  async getById(orderId: string, userId: string) {
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

  async getByPaymentId(paymentId: string) {
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

  async updateStatus(orderId: string, status: OrderStatus, paymentId?: string) {
    return this.prisma.order.update({
      where: { id: orderId },
      data: {
        status,
        ...(paymentId && { paymentId }),
      },
    })
  }

  async getCountUser(userId: string) {
    const count = await this.prisma.order.count({
      where: { userId },
    })

    return { count }
  }

  async getByUser(query: PaginationOrderDto, userId: string) {
    const { page = 1, limit = 10 } = query

    const skip = (page - 1) * limit
    const take = +limit

    const [orders, total] = await Promise.all([
      this.prisma.order.findMany({
        where: { userId },
        skip,
        take,
        include: {
          _count: {
            select: { items: true },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prisma.order.count({ where: { userId } }),
    ])

    const totalPages = Math.ceil(total / limit)
    const hasNext = page < totalPages
    const hasPrev = page > 1

    return {
      data: orders,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
        hasNext,
        hasPrev,
      },
    }
  }
}
