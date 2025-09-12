import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/core/db/prisma.service'

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  async getUserAll(id: string) {
    const count = await this.prisma.orderItem.count({
      where: { order: { userId: id } },
    })

    return { count }
  }
}
