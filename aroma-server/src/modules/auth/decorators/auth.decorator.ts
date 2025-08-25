import { applyDecorators, UseGuards } from '@nestjs/common'
import { EnumUserRole } from '@prisma/client'
import { JwtAuthGuard } from '../guards/jwt.guard'
import { AdminGuard } from '../guards/admin.guard'

export const Auth = (role: EnumUserRole) => {
  const additionalGuards = role === EnumUserRole.admin ? [AdminGuard] : []

  return applyDecorators(UseGuards(JwtAuthGuard, ...additionalGuards))
}
