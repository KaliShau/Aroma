import { IAuthModuleOptions } from '@nestjs/passport'

export const PassportConfig = ():
  | Promise<IAuthModuleOptions>
  | IAuthModuleOptions => {
  return {
    defaultStrategy: 'jwt',
  }
}
