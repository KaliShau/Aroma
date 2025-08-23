import { NestFactory } from '@nestjs/core'
import { AppModule } from './core/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  await app.listen(process.env.PORT)
}
bootstrap()
