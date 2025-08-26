import { TypeUser } from '@/entities/user'

export type TypeGenerateCode = {
  email: string
}

export type TypeAuth = {
  email: string
  code: string
}

export type TypeAccessToken = {
  accessToken: string
}

export type TypeResponseAuth = TypeAccessToken & {
  user: TypeUser
}
