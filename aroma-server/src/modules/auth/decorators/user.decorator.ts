import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User as UserPrisma } from '@prisma/client'

export const User = createParamDecorator(
  (data: keyof UserPrisma, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return data ? request.user[data] : request.user
  }
)
