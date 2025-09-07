import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/core/db/prisma.service'
import { CreateCategoryCoffeeDto } from './dto/category-coffee.dto'

@Injectable()
export class CategoryCoffeeService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string) {
    const category = await this.prisma.categoryCoffee.findUnique({
      where: { id },
    })

    if (!category) throw new NotFoundException('Category not found!')

    return category
  }

  async getBySlug(slug: string) {
    const category = await this.prisma.categoryCoffee.findUnique({
      where: { slug },
    })

    if (!category) throw new NotFoundException('Category not found!')

    return category
  }

  async create(dto: CreateCategoryCoffeeDto) {
    const isExists = await this.prisma.categoryCoffee.findUnique({
      where: { slug: dto.slug },
    })

    if (isExists)
      throw new BadRequestException('Category with this slug already exists!')

    return this.prisma.categoryCoffee.create({
      data: {
        name: dto.name,
        description: dto.description,
        slug: dto.slug,
      },
    })
  }

  async getAll() {
    return this.prisma.categoryCoffee.findMany()
  }
}
