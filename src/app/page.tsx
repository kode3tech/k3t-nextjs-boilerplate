import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

import { getLocale } from '@/lib/i18n/i18n-config'

export const revalidate = 60

async function RootPage() {
  const headersList = await headers()
  const locale = getLocale(headersList)
  const pathname = headersList.get('x-pathname') || '/'
  redirect(`/${locale}/${pathname === '/' ? '' : pathname}`)
}

export default RootPage
