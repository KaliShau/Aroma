import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { EmailAuthDto, SendCodeDto } from './dto/auth.dto'
import { CookieService } from './cookie.service'
import { Request, Response } from 'express'

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

  @Get('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const oldRefreshToken = await this.cookieService.getCookie(req)
    const { refreshToken, ...rest } =
      await this.authService.refresh(oldRefreshToken)
    this.cookieService.setCookie(res, refreshToken)

    console.log(rest)

    return rest
  }

  @Post('sign-out')
  async signOut(@Res({ passthrough: true }) res: Response) {
    await this.cookieService.clearCookie(res)
    return { message: 'You have successfully left the system!' }
  }
}
