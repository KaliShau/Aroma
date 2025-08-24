import { NestFactory } from '@nestjs/core'
import { AppModule } from './core/app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(cookieParser())
  app.setGlobalPrefix('api')

  await app.listen(process.env.PORT)
}
bootstrap()
