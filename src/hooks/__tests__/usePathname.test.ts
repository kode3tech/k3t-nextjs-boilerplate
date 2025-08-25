import { renderHook, act } from '@testing-library/react'
import { useRouter, usePathname as useNextPathname } from 'next/navigation'
import { usePathname } from '../usePathname'

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn()
}))

const mockPush = jest.fn()
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>
const mockUseNextPathname = useNextPathname as jest.MockedFunction<
  typeof useNextPathname
>

describe('usePathname', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseRouter.mockReturnValue({
      push: mockPush,
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn()
    })
  })

  describe('pathname', () => {
    it('should return the current pathname from useNextPathname', () => {
      const testPathname = '/en/about'
      mockUseNextPathname.mockReturnValue(testPathname)

      const { result } = renderHook(() => usePathname())

      expect(result.current.pathname).toBe(testPathname)
    })
  })

  describe('redirectTo', () => {
    it('should call router.push with the provided URL', () => {
      mockUseNextPathname.mockReturnValue('/en')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectTo('/en/contact')
      })

      expect(mockPush).toHaveBeenCalledWith('/en/contact')
      expect(mockPush).toHaveBeenCalledTimes(1)
    })

    it('should handle absolute URLs', () => {
      mockUseNextPathname.mockReturnValue('/en')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectTo('https://example.com')
      })

      expect(mockPush).toHaveBeenCalledWith('https://example.com')
    })
  })

  describe('redirectWithLocale', () => {
    it('should redirect to root path with locale when no path is provided', () => {
      mockUseNextPathname.mockReturnValue('/')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('pt')
      })

      expect(mockPush).toHaveBeenCalledWith('/pt')
    })

    it('should redirect to specific path with locale when path is provided', () => {
      mockUseNextPathname.mockReturnValue('/en/about')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('es', '/contact')
      })

      expect(mockPush).toHaveBeenCalledWith('/es/contact')
    })

    it('should use current pathname when no path is provided', () => {
      mockUseNextPathname.mockReturnValue('/en/products')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('pt')
      })

      expect(mockPush).toHaveBeenCalledWith('/pt/en/products')
    })

    it('should handle root pathname correctly', () => {
      mockUseNextPathname.mockReturnValue('/')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('fr', '/')
      })

      expect(mockPush).toHaveBeenCalledWith('/fr')
    })

    it('should handle nested paths correctly', () => {
      mockUseNextPathname.mockReturnValue('/en/blog/article-1')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('de', '/blog/article-2')
      })

      expect(mockPush).toHaveBeenCalledWith('/de/blog/article-2')
    })
  })

  describe('return object', () => {
    it('should return an object with pathname, redirectTo, and redirectWithLocale', () => {
      mockUseNextPathname.mockReturnValue('/en/home')
      const { result } = renderHook(() => usePathname())

      expect(result.current).toHaveProperty('pathname')
      expect(result.current).toHaveProperty('redirectTo')
      expect(result.current).toHaveProperty('redirectWithLocale')
      expect(typeof result.current.redirectTo).toBe('function')
      expect(typeof result.current.redirectWithLocale).toBe('function')
    })
  })

  describe('edge cases', () => {
    it('should handle empty string locale', () => {
      mockUseNextPathname.mockReturnValue('/about')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('', '/about')
      })

      // Com locale vazio, deve retornar apenas o path
      expect(mockPush).toHaveBeenCalledWith('/about')
    })

    it('should handle special characters in paths', () => {
      mockUseNextPathname.mockReturnValue('/en/josé-maría')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('es')
      })

      expect(mockPush).toHaveBeenCalledWith('/es/en/josé-maría')
    })

    it('should handle root path with locale', () => {
      mockUseNextPathname.mockReturnValue('/')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('pt')
      })

      expect(mockPush).toHaveBeenCalledWith('/pt')
    })

    it('should handle root path with empty locale', () => {
      mockUseNextPathname.mockReturnValue('/')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale('')
      })

      expect(mockPush).toHaveBeenCalledWith('/')
    })

    it('should handle null/undefined locale gracefully', () => {
      mockUseNextPathname.mockReturnValue('/about')
      const { result } = renderHook(() => usePathname())

      act(() => {
        result.current.redirectWithLocale(null as any)
      })

      expect(mockPush).toHaveBeenCalledWith('/about')
    })
  })
})
