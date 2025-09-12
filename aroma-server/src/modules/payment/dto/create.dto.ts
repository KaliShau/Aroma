import { IsArray, IsInt, IsString } from 'class-validator'

export class CreatePaymentDto {
  @IsArray()
  items: Item[]
}
class Item {
  @IsString()
  coffeeId: string

  @IsInt()
  quantity: number
}
