import { renderHook } from '@testing-library/react'
import { JSX, ReactNode } from 'react'

/**
 * Utility function to test custom hooks with providers
 */
export const renderHookWithProviders = <T>(
  hook: () => T,
  providers: ReactNode[] = []
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return providers.reduce(
      (acc, Provider) => Provider,
      children
    ) as JSX.Element
  }

  return renderHook(hook, { wrapper: Wrapper })
}

// This file contains only utilities, no direct tests
// Tests are in the specific files for each hook

/**
 * Mock Next.js router with default values
 */
export const mockNextRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  basePath: '',
  locale: 'en',
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
  domainLocales: [],
  isReady: true,
  isPreview: false,
  isFallback: false
}

/**
 * Helper to create mock navigation functions
 */
export const createMockNavigation = (pathname = '/') => ({
  pathname,
  router: {
    ...mockNextRouter,
    pathname
  }
})

/**
 * Wait for multiple re-renders in hooks
 */
export const waitForHookUpdates = (ms = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms))
