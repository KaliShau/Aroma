import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common'
import { EnumUserRole, User } from '@prisma/client'
import { Observable } from 'rxjs'

export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    const user: User = request.user

    if (!user) {
      throw new ForbiddenException('The user is not authenticated!')
    }

    if (!user.role || user.role !== EnumUserRole.admin) {
      throw new ForbiddenException('Administrator rights are required!')
    }

    return true
  }
}
