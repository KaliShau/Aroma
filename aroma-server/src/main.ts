import { NestFactory } from '@nestjs/core'
import { AppModule } from './core/app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(cookieParser())
  app.setGlobalPrefix('api')
  app.enableCors({ credentials: true, origin: ['http://localhost:3000'] })

  await app.listen(process.env.PORT)
}
bootstrap()
