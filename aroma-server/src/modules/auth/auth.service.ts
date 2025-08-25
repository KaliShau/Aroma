import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'src/core/db/prisma.service'
import { EmailAuthDto, SendCodeDto } from './dto/auth.dto'
import { UserService } from '../user/user.service'
import { VerificationService } from '../verification/verification.service'
import { MailService } from './mail.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    readonly prisma: PrismaService,
    readonly userService: UserService,
    readonly verificationService: VerificationService,
    readonly mailService: MailService,
    readonly jwtService: JwtService
  ) {}

  async generateCode(dto: EmailAuthDto) {
    let user = await this.userService.getByEmail(dto.email)

    if (!user) {
      user = await this.userService.create(dto)
    }

    const code = await this.verificationService.updateCodeAndExpiration(user.id)

    await this.mailService.sendAuthCode(user.email, code)

    return { message: 'The code is sent to your mail!' }
  }

  async auth(dto: SendCodeDto) {
    const user = await this.userService.getByEmail(dto.email)

    if (!user)
      throw new BadRequestException('User with such an email was not found!')

    if (dto.code !== user.verification.code) {
      throw new UnauthorizedException('Wrong code!')
    }

    if (new Date() > user.verification.expiresAt) {
      await this.verificationService.deleteCodeAndExpiration(user.id)
      throw new UnauthorizedException('At the expiration!')
    }

    await this.verificationService.deleteCodeAndExpiration(user.id)
    const tokens = await this.generateTokens(user.id)

    return { user, ...tokens }
  }

  async refresh(refreshToken: string) {
    if (!refreshToken)
      throw new UnauthorizedException('Refresh token not found!')

    const valid = await this.jwtService.decode(refreshToken)

    if (!valid) throw new UnauthorizedException('Invalid refresh token')

    const user = await this.userService.getById(valid.sub)

    if (!user) throw new UnauthorizedException('Invalid refresh token')

    const tokens = await this.generateTokens(user.id)

    return { ...tokens }
  }

  /////////////////

  private async generateTokens(id: string) {
    const accessToken = await this.jwtService.signAsync(
      { sub: id },
      {
        expiresIn: '1h',
      }
    )

    const refreshToken = await this.jwtService.signAsync(
      { sub: id },
      {
        expiresIn: '7d',
      }
    )

    return { accessToken, refreshToken }
  }
}
