import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { CategoryCoffeeService } from './category-coffee.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CreateCategoryCoffeeDto } from './dto/category-coffee.dto'

@Controller('category-coffee')
export class CategoryCoffeeController {
  constructor(private readonly categoryCoffeeService: CategoryCoffeeService) {}

  @UsePipes(new ValidationPipe())
  @Auth('admin')
  @Post()
  async create(@Body() dto: CreateCategoryCoffeeDto) {
    return this.categoryCoffeeService.create(dto)
  }

  @Get()
  async getAll() {
    return this.categoryCoffeeService.getAll()
  }
}
