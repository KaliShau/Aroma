import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'
import { ConfigService } from '@nestjs/config'

export const CorsConfig = async (
  configService: ConfigService
): Promise<CorsOptions> => {
  return {
    credentials: true,
    origin: configService.get('APP_CORS'),
  }
}
