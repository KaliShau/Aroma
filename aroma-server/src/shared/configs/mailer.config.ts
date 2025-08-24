import { MailerOptions } from '@nestjs-modules/mailer'
import { ConfigService } from '@nestjs/config'
import { join } from 'path'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

export const MailerConfig = (
  configService: ConfigService
): Promise<MailerOptions> | MailerOptions => {
  const templateDir = configService.get('SMTP_TEMPLATE')

  return {
    transport: {
      host: configService.get('SMTP_HOST'),
      port: configService.get('SMTP_PORT'),
      secure: false,
      auth: {
        user: configService.get('SMTP_USER'),
        pass: configService.get('SMTP_PASSWORD'),
      },
    },
    defaults: {
      from: `"Aroma" <${configService.get('SMTP_FROM')}>`,
    },
    template: {
      dir: join(__dirname, '..', '..', '..', templateDir),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }
}
