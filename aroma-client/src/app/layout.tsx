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
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className={font.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default RootLayout
