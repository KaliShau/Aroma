import { CONTACT_DATA } from '@/shared/constants/contact.constant'

import { TypeInfo } from '../model/footer.type'

export const INFO: TypeInfo[] = [
  {
    title: 'Location',
    info: CONTACT_DATA.address
  },
  {
    title: 'Phone',
    info: CONTACT_DATA.phone
  },
  {
    title: 'Email',
    info: CONTACT_DATA.email
  },
  {
    title: 'Opening Hours',
    info: 'Monday - Sunday: 8:00 - 22:00'
  }
]
