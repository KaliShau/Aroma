import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { CoffeeService } from './coffee.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { PaginationCoffeeDto } from './dto/paginated-coffee.dto'

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @UsePipes(new ValidationPipe())
  @Get()
  async getAll(@Query() paginationDto: PaginationCoffeeDto) {
    return this.coffeeService.getAll(paginationDto)
  }

  @UsePipes(new ValidationPipe())
  @Auth('admin')
  @Get('admin')
  async getAllAdmin(@Query() paginationDto: PaginationCoffeeDto) {
    return this.coffeeService.getAllAdmin(paginationDto)
  }

  @Get('random')
  async getRandom(@Query('limit') limit?: number) {
    return this.coffeeService.getRandom(limit)
  }

  @Post('by-ids')
  async getByIdsPost(@Body() body: { ids: string[] }) {
    return this.coffeeService.getByIds(body.ids || [])
  }

  @UsePipes(new ValidationPipe())
  @Auth('admin')
  @Post()
  async create(@Body() dto: CreateCoffeeDto) {
    return this.coffeeService.create(dto)
  }

  @Get(':slug')
  async getBySlug(@Param('slug') slug: string) {
    return this.coffeeService.getBySlug(slug)
  }

  @Get('id/:id')
  async getById(@Param('id') id: string) {
    return this.coffeeService.getById(id)
  }

  @Auth('admin')
  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.coffeeService.delete(id)
  }
}
