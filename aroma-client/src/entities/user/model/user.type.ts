export enum EnumUserRole {
  user,
  admin
}

export type TypeUser = {
  id: string
  createdAt: Date
  updatedAt: Date

  username: string
  email: string

  firstName?: string
  lastName?: string

  phone?: string
  avatarUrl?: string

  role: EnumUserRole
}
