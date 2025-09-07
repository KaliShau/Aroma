import { IsString } from 'class-validator'

export class CreateCategoryCoffeeDto {
  @IsString()
  name: string

  @IsString()
  slug: string

  @IsString()
  description: string
}
