import { CONTACT_DATA } from '@/shared/constants/contact.constant'

export type TypeContactInfoData = {
  title: string
  info: string
}

export const CONTACT_INFO_DATA: TypeContactInfoData[] = [
  {
    title: 'Email',
    info: CONTACT_DATA.email
  },
  {
    title: 'Address',
    info: CONTACT_DATA.address
  },
  {
    title: 'Phone',
    info: CONTACT_DATA.phone
  }
]
