import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/core/db/prisma.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { CategoryCoffeeService } from '../category-coffee/category-coffee.service'
import { PaginationCoffeeDto } from './dto/paginated-coffee.dto'
import { CoffeeQueryBuilder } from './utils/coffee.builder'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'
import { EnumUserRole } from '@prisma/client'

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

  async getBySlug(slug: string, isAdmin: boolean = false) {
    const coffee = await this.prisma.coffee.findUnique({
      where: { slug, ...(!isAdmin && { isAvailable: true }) },
      include: {
        categoryCoffee: true,
      },
    })

    if (!coffee) throw new NotFoundException('Coffee not found!')

    return coffee
  }

  async getBySlugAdmin(slug: string, role: EnumUserRole) {
    const isAdmin = role === EnumUserRole.admin

    return this.getBySlug(slug, isAdmin)
  }

  async update(id: string, dto: UpdateCoffeeDto) {
    const coffee = await this.prisma.coffee.findUnique({ where: { id } })

    if (!coffee) throw new NotFoundException('Coffee not found!')

    await this.prisma.coffee.update({ where: { id }, data: { ...dto } })

    return { message: 'Coffee is successfully update!' }
  }

  async updateAvailable(id: string) {
    const coffee = await this.prisma.coffee.findUnique({ where: { id } })

    if (!coffee) throw new NotFoundException('Coffee not found!')

    await this.prisma.coffee.update({
      where: { id },
      data: { isAvailable: !coffee.isAvailable },
    })

    return { message: 'Available coffee is successfully update!' }
  }

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
    const builder = new CoffeeQueryBuilder(this.prisma)
      .setSearch(query.search)
      .setCategory(query.category)
      .setAvailableOnly(true)

    return builder.executePagination(query.page, query.limit)
  }

  async getAllAdmin(query: PaginationCoffeeDto) {
    const builder = new CoffeeQueryBuilder(this.prisma)
      .setSearch(query.search)
      .setCategory(query.category)
      .setAvailableOnly(false)

    return builder.executePagination(query.page, query.limit)
  }
}
