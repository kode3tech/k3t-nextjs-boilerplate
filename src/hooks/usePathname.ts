'use client'

import { usePathname as useNextPathname, useRouter } from 'next/navigation'

export function usePathname() {
  const pathname = useNextPathname()
  const router = useRouter()

  const redirectTo = (url: string) => {
    router.push(url)
  }

  const redirectWithLocale = (locale: string, path?: string) => {
    const targetPath = path || pathname

    // If locale is empty, don't add extra slash
    if (!locale) {
      router.push(targetPath === '/' ? '/' : targetPath)
      return
    }

    const newUrl = `/${locale}${targetPath === '/' ? '' : targetPath}`
    router.push(newUrl)
  }

  return {
    pathname,
    redirectTo,
    redirectWithLocale
  }
}
