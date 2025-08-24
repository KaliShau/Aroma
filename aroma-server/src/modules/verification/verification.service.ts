import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from 'src/core/db/prisma.service'

@Injectable()
export class VerificationService {
  constructor(
    readonly prisma: PrismaService,
    readonly configService: ConfigService
  ) {}

  async updateCodeAndExpiration(userId: string) {
    const code = await this.generatedCode()

    await this.prisma.verification.update({
      where: { userId },
      data: {
        code,
        expiresAt: await this.generatedExpiresDate(),
      },
    })

    return code
  }

  async deleteCodeAndExpiration(userId: string) {
    return await this.prisma.verification.update({
      where: { userId },
      data: {
        code: null,
        expiresAt: null,
      },
    })
  }

  private async generatedCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    const length = this.configService.get('CODE_LENGTH')

    let code = ''
    for (let i = 0; i < length; i++) {
      code += chars[Math.floor(Math.random() * chars.length)]
    }
    return code
  }

  private async generatedExpiresDate(minutes = 10) {
    const now = new Date()
    return new Date(now.getTime() + minutes * 60000)
  }
}
