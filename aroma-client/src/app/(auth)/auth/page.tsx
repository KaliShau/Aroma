import { Auth } from '@/pages/auth/auth'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Auth'
}

const AuthPage: NextPage = () => {
  return <Auth />
}

export default AuthPage
