import '../globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, Plus_Jakarta_Sans } from 'next/font/google'

import { i18n, Locale } from '@/lib/i18n/i18n-config'

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'k3t nextjs boilerplate',
  description: 'Default k3t nextjs app'
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  const params = await props.params
  const { children } = props
  return (
    <html lang={params.lang}>
      <body
        className={`${ibmPlexSans.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
