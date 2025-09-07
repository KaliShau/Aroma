import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PrismaModule } from './db/prisma.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ServeStaticConfig } from 'src/shared/configs/serve-static.config'
import { UserModule } from 'src/modules/user/user.module'
import { AuthModule } from 'src/modules/auth/auth.module'
import { VerificationModule } from 'src/modules/auth/verification/verification.module'
import { MailerModule } from '@nestjs-modules/mailer'
import { MailerConfig } from 'src/shared/configs/mailer.config'
import { CoffeeModule } from 'src/modules/coffee/coffee.module'
import { CategoryCoffeeModule } from 'src/modules/category-coffee/category-coffee.module'
import { FileModule } from 'src/modules/file/file.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ServeStaticModule.forRootAsync({
      useFactory: ServeStaticConfig,
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      useFactory: MailerConfig,
      inject: [ConfigService],
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    VerificationModule,
    CoffeeModule,
    CategoryCoffeeModule,
    FileModule,
  ],
})
export class AppModule {}
