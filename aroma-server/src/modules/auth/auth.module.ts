import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserService } from '../user/user.service'
import { VerificationService } from '../verification/verification.service'
import { MailService } from './mail.service'
import { JwtModule } from '@nestjs/jwt'
import { CookieService } from './cookie.service'
import { ConfigService } from '@nestjs/config'
import { JwtConfig } from 'src/shared/configs/jwt.config'
import { JwtStrategy } from './strategies/jwt.strategy'
import { PassportModule } from '@nestjs/passport'
import { PassportConfig } from 'src/shared/configs/passport.config'

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    VerificationService,
    MailService,
    AuthService,
    CookieService,
    JwtStrategy,
  ],
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: JwtConfig,
    }),
    PassportModule.registerAsync({
      useFactory: PassportConfig,
    }),
  ],
  exports: [JwtModule],
})
export class AuthModule {}
