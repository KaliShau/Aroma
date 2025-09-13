import { IsOptional, IsString, IsNumber, Min, IsBoolean } from 'class-validator'
import { Type } from 'class-transformer'

export class PaginationOrderDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number = 10
}
