import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'

import { SITE_DESCRIPTION, SITE_TITLE } from '@/shared/constants/seo.constant'

import { MainProvider } from './providers/main.provider'
import './styles/globals.scss'

const font = Montserrat({
  variable: '--font',
  subsets: ['latin', 'latin-ext'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION
}

const MainLayout = ({ children }: { children: ReactNode }) => {
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
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  )
}

export default MainLayout
