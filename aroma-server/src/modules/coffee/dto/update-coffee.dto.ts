import { Decimal } from '@prisma/client/runtime/library'
import { IsBoolean, IsDecimal, IsString } from 'class-validator'

export class UpdateCoffeeDto {
  @IsString()
  name: string

  @IsString()
  slug: string

  @IsString()
  description: string

  @IsDecimal()
  price: Decimal

  @IsString()
  imageUrl: string

  @IsString()
  categoryCoffeeId: string
}
