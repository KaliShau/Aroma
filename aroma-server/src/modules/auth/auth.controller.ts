import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { EmailAuthDto, SendCodeDto } from './dto/auth.dto'
import { CookieService } from './cookie.service'
import { Response } from 'express'

@Controller('auth')
export class AuthController {
  constructor(
    readonly authService: AuthService,
    readonly cookieService: CookieService
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('generate-code')
  async generateCode(@Body() dto: EmailAuthDto) {
    return this.authService.generateCode(dto)
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async auth(
    @Body() dto: SendCodeDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { refreshToken, ...rest } = await this.authService.auth(dto)

    this.cookieService.setCookie(res, refreshToken)

    return rest
  }

  @Post('sign-out')
  async signOut(@Res({ passthrough: true }) res: Response) {
    await this.cookieService.clearCookie(res)
    return { message: 'Вы успешно вышли из системы!' }
  }
}
