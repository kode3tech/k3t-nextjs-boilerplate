import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import type { ReactNode } from 'react'

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

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
