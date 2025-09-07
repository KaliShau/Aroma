import { Module } from '@nestjs/common'
import { CoffeeService } from './coffee.service'
import { CoffeeController } from './coffee.controller'
import { CategoryCoffeeService } from '../category-coffee/category-coffee.service'

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService, CategoryCoffeeService],
})
export class CoffeeModule {}
