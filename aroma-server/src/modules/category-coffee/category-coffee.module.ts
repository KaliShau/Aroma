import { Module } from '@nestjs/common'
import { CategoryCoffeeService } from './category-coffee.service'
import { CategoryCoffeeController } from './category-coffee.controller'

@Module({
  controllers: [CategoryCoffeeController],
  providers: [CategoryCoffeeService],
  exports: [CategoryCoffeeService],
})
export class CategoryCoffeeModule {}
