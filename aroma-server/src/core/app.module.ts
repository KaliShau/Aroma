import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PrismaModule } from './db/prisma.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ServeStaticConfig } from 'src/shared/configs/serve-static.config'
import { UserModule } from 'src/modules/user/user.module'
import { AuthModule } from 'src/modules/auth/auth.module'
import { VerificationModule } from 'src/modules/verification/verification.module'
import { MailerModule } from '@nestjs-modules/mailer'
import { MailerConfig } from 'src/shared/configs/mailer.config'

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
  ],
})
export class AppModule {}
