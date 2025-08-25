import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { User } from '../auth/decorators/user.decorator'
import { UpdateAvatarDto, UpdateProfileDto } from './dto/update-user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth('user')
  @Get('profile')
  async profile(@User('id') id: string) {
    return await this.userService.getById(id)
  }

  @UsePipes(new ValidationPipe())
  @Auth('user')
  @Patch('update-profile')
  async updateProfile(@User('id') id: string, @Body() dto: UpdateProfileDto) {
    return await this.userService.updateProfile(id, dto)
  }

  @UsePipes(new ValidationPipe())
  @Auth('user')
  @Patch('update-avatar')
  async updateAvatar(@User('id') id: string, @Body() dto: UpdateAvatarDto) {
    return await this.userService.updateAvatar(id, dto)
  }
}
