import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MailService {
  constructor(readonly mailerService: MailerService) {}

  async sendAuthCode(email: string, code: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Ваш код авторизации',
      template: 'auth-code',
      context: {
        code,
      },
    })
  }
}
