import { IsString, Length } from 'class-validator'
import { EmailUserDto } from 'src/modules/user/dto/user.dto'

export class EmailAuthDto extends EmailUserDto {}

export class SendCodeDto extends EmailAuthDto {
  @IsString()
  code: string
}
