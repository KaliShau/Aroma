import { IsEmail } from 'class-validator'

export class EmailUserDto {
  @IsEmail(
    {},
    {
      message: 'Please enter the correct email address!',
    }
  )
  email: string
}
