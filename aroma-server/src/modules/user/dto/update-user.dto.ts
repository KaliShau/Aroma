import { IsString } from 'class-validator'

export class UpdateProfileDto {
  @IsString()
  username: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  phone: string
}

export class UpdateAvatarDto {
  @IsString()
  avatarUrl: string
}
