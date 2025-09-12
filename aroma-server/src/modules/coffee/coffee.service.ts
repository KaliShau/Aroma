import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/core/db/prisma.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { CategoryCoffeeService } from '../category-coffee/category-coffee.service'
import { PaginationCoffeeDto } from './dto/paginated-coffee.dto'

@Injectable()
export class CoffeeService {
  constructor(
    private prisma: PrismaService,
    private categoryCoffeeService: CategoryCoffeeService
  ) {}

  async create(dto: CreateCoffeeDto) {
    const slugCoffee = await this.prisma.coffee.findUnique({
      where: { slug: dto.slug },
    })

    if (slugCoffee)
      throw new BadRequestException('Coffee with this slug already exists!')

    await this.categoryCoffeeService.getById(dto.categoryCoffeeId)

    return await this.prisma.coffee.create({
      data: {
        name: dto.name,
        description: dto.description,
        imageUrl: dto.imageUrl,
        isAvailable: true,
        price: dto.price,
        slug: dto.slug,
        categoryCoffee: {
          connect: {
            id: dto.categoryCoffeeId,
          },
        },
      },
    })
  }

  async getById(id: string) {
    const coffee = await this.prisma.coffee.findUnique({
      where: { id },
      include: {
        categoryCoffee: true,
      },
    })

    if (!coffee) throw new NotFoundException('Coffee not found!')

    return coffee
  }

  async getBySlug(slug: string) {
    const coffee = await this.prisma.coffee.findUnique({
      where: { slug, isAvailable: true },
      include: {
        categoryCoffee: true,
      },
    })

    if (!coffee) throw new NotFoundException('Coffee not found!')

    return coffee
  }

  async update() {}

  async delete(id: string) {
    await this.getById(id)
    await this.prisma.coffee.delete({ where: { id } })

    return { message: 'Coffee is successfully delete!' }
  }

  async getRandom(limit: number = 6) {
    return this.prisma.$queryRaw`
    SELECT 
      id,
      created_at as "createdAt",
      updated_at as "updatedAt",
      name,
      slug,
      description,
      price,
      image_url as "imageUrl",
      is_available as "isAvailable",
      category_coffee_id as "categoryCoffeeId"
    FROM coffee 
    WHERE is_available = true 
    ORDER BY RANDOM() 
    LIMIT ${limit}
  `
  }

  async getByIds(ids: string[]) {
    if (!ids || ids.length === 0) {
      return []
    }

    return this.prisma.coffee.findMany({
      where: {
        id: {
          in: ids,
        },
        isAvailable: true,
      },
      include: {
        categoryCoffee: true,
      },
    })
  }

  async getAll(query: PaginationCoffeeDto) {
    const { page = 1, limit = 6, search, category } = query

    const skip = (page - 1) * limit
    const take = +limit

    const where: any = {}

    if (category) {
      where.categoryCoffee = {
        slug: category,
      }
    }

    if (search) {
      where.OR = [
        {
          name: {
            contains: search,
            mode: 'insensitive' as const,
          },
        },
        {
          description: {
            contains: search,
            mode: 'insensitive' as const,
          },
        },
      ]
    }

    const [coffees, total] = await Promise.all([
      this.prisma.coffee.findMany({
        where: { isAvailable: true, ...where },
        skip,
        take,
        include: {
          categoryCoffee: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prisma.coffee.count({ where }),
    ])

    const totalPages = Math.ceil(total / limit)
    const hasNext = page < totalPages
    const hasPrev = page > 1

    return {
      data: coffees,
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
