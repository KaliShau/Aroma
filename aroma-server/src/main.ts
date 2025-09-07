import { NestFactory } from '@nestjs/core'
import { AppModule } from './core/app.module'
import * as cookieParser from 'cookie-parser'
import { ConfigService } from '@nestjs/config'
import { CorsConfig } from './shared/configs/cors.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = await app.get(ConfigService)
  const corsOptions = await CorsConfig(configService)

  app.use(cookieParser())
  app.setGlobalPrefix('api')
  app.enableCors(corsOptions)

  await app.listen(configService.get('APP_PORT'))
}
bootstrap()
