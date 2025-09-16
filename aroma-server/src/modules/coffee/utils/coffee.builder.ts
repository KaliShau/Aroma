import { PrismaService } from 'src/core/db/prisma.service'

export class CoffeeQueryBuilder {
  private where: any = {}
  private include: any = { categoryCoffee: true }
  private orderBy: any = { createdAt: 'desc' }

  constructor(private prisma: PrismaService) {}

  setSearch(search: string) {
    if (search) {
      this.where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ]
    }
    return this
  }

  setCategory(category: string) {
    if (category) {
      this.where.categoryCoffee = { slug: category }
    }
    return this
  }

  setAvailableOnly(availableOnly: boolean) {
    if (availableOnly) {
      this.where.isAvailable = true
    }
    return this
  }

  async executePagination(page: number = 1, limit: number = 6) {
    const skip = (page - 1) * limit
    const take = +limit

    const [coffees, total] = await Promise.all([
      this.prisma.coffee.findMany({
        where: this.where,
        skip,
        take,
        include: this.include,
        orderBy: this.orderBy,
      }),
      this.prisma.coffee.count({ where: this.where }),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      data: coffees,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    }
  }
}
