import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n, getLocale } from '@/lib/i18n/i18n-config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  console.log(pathname)

  // Security: Block malicious headers to prevent middleware bypass
  // CVE-2025-29927 mitigation
  const suspiciousHeaders = [
    'x-middleware-subrequest',
    'x-middleware-invoke',
    'x-invoke-path',
    'x-invoke-query'
  ]

  for (const header of suspiciousHeaders) {
    if (request.headers.has(header)) {
      console.warn(
        `[Security] Blocked request with suspicious header: ${header}`
      )
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // Ignore static files and public folder
  if (
    pathname.startsWith('/public/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    (pathname.includes('.') && !pathname.startsWith('/')) // files with extension
  ) {
    return NextResponse.next()
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)
  requestHeaders.set('x-url', request.url)

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /about
    // The new URL is now /en-US/about
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    )
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

export const config = {
  // Matcher that ignores:
  // - /_next/ (Next.js files)
  // - /api/ (API routes)
  // - static files (with extensions like .ico, .png, .jpg, etc.)
  // - all files that normally go in /public
  matcher: [
    '/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico|sitemap.xml|robots.txt|.*\\.[a-zA-Z]+$).*)'
  ]
}
