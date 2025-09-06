import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { promisify } from 'util'
import * as dns from 'dns'

const resolveMx = promisify(dns.resolveMx)

@Injectable()
export class MailService {
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  private disposableDomains = [
    'tempmail.com',
    'mailinator.com',
    '10minutemail.com',
    'guerrillamail.com',
    'throwawaymail.com',
  ]

  constructor(readonly mailerService: MailerService) {}

  async validateEmail(
    email: string
  ): Promise<{ isValid: boolean; message?: string }> {
    if (!this.emailRegex.test(email))
      return { isValid: false, message: 'Invalid email format' }

    const domain = email.split('@')[1].toLowerCase()

    if (this.disposableDomains.includes(domain))
      return { isValid: false, message: 'Disposable emails are not allowed' }

    try {
      const mxRecords = await resolveMx(domain)
      if (!mxRecords || mxRecords.length === 0) {
        return { isValid: false, message: 'Email domain does not exist' }
      }
      return { isValid: true }
    } catch (error) {
      return { isValid: false, message: 'Email domain does not exist' }
    }
  }

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
