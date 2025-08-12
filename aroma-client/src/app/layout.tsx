import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/globals.scss'
import { ReactNode } from 'react'
import { SITE_DESCRIPTION, SITE_TITLE } from '@/shared/constants/seo.constant'
import { Layout } from '@/widgets/layout'

const font = Montserrat({
  variable: '--font',
  subsets: ['latin', 'latin-ext']
})

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={font.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default RootLayout
