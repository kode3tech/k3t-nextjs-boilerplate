import { NextRequest } from 'next/server'
import Negotiator from 'negotiator'
import { match as matchLocale } from '@formatjs/intl-localematcher'

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'pt', 'es']
} as const

export type Locale = (typeof i18n)['locales'][number]

export function getLocale(request: NextRequest): string

export function getLocale(headers: Headers): string

export function getLocale(requestOrHeaders: NextRequest | Headers): string {
  const negotiatorHeaders: Record<string, string> = {}

  if (requestOrHeaders instanceof Headers) {
    requestOrHeaders.forEach((value, key) => (negotiatorHeaders[key] = value))
  } else {
    requestOrHeaders.headers.forEach(
      (value, key) => (negotiatorHeaders[key] = value)
    )
  }

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}
