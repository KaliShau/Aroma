import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserService } from 'src/modules/user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    readonly userService: UserService,
    readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    })
  }

  async validate(payload: any) {
    console.log('JWT Payload:', payload)
    const userId = payload.sub
    console.log('User ID:', userId)

    if (!userId) {
      throw new UnauthorizedException('Invalid token payload!')
    }

    return this.userService.getById(userId)
  }
}
