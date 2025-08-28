import { TypeUser } from '@/entities/user'

export type TypeGenerateCode = {
  email: string
}

export type TypeEntryCode = {
  email: string
  code: string
}

export type TypeAccessToken = {
  accessToken: string
}

export type TypeResponseEntryCode = TypeAccessToken & {
  user: TypeUser
}
