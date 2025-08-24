import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const JwtConfig = (
  configService: ConfigService
): Promise<JwtModuleOptions> | JwtModuleOptions => {
  return {
    secret: configService.get('JWT_SECRET'),
  }
}
