# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2025-12-06

### Security

- **CRITICAL**: Fixed Next.js RCE vulnerability (CVE-2025-29927, CVSS 10.0/10)
  - Updated Next.js from 15.4.6 to 15.5.7
  - Patched Remote Code Execution vulnerability in React Flight protocol
  - Fixed SSRF vulnerability in middleware redirect handling

- **HIGH**: Fixed Playwright SSL certificate verification vulnerability
  - Updated Playwright from 1.55.0 to 1.57.0
  - Now properly verifies SSL certificates when downloading browsers

- **MODERATE**: Fixed multiple dependency vulnerabilities
  - Updated Vite to 6.0.7 (fixed path traversal vulnerabilities)
  - Fixed glob command injection vulnerability
  - Fixed js-yaml prototype pollution vulnerability

### Added

- **Security Headers**: Comprehensive HTTP security headers in `next.config.ts`
  - Strict-Transport-Security (HSTS) with preload
  - X-Frame-Options for clickjacking protection
  - X-Content-Type-Options for MIME sniffing protection
  - X-XSS-Protection
  - Referrer-Policy for privacy control
  - Permissions-Policy for browser feature control
  - Content-Security-Policy (CSP) with strict directives

- **Middleware Protection**: CVE-2025-29927 bypass mitigation in `src/middleware.ts`
  - Blocks malicious headers (x-middleware-subrequest, x-middleware-invoke, etc.)
  - Logs suspicious request attempts
  - Returns 403 Forbidden for blocked requests

- **TypeScript Support**: Added CSS module type declarations
  - Created `src/types/css.d.ts` for proper CSS import typing
  - Eliminates TypeScript errors for CSS side-effect imports

### Changed

- **Dependencies**: Updated to latest secure versions
  - react: 19.1.0 → 19.2.1
  - react-dom: 19.1.0 → 19.2.1
  - next: 15.4.6 → 15.5.7
  - playwright: 1.55.0 → 1.57.0
  - vite: 7.2.6 → 6.0.7 (Storybook compatibility)

- **Next.js 15 Compatibility**: Updated async params handling
  - Fixed `params` prop type in `src/app/[lang]/layout.tsx`
  - Fixed `params` prop type in `src/app/[lang]/page.tsx`
  - Compatible with Next.js 15.5+ async params API

### Fixed

- **Build Process**: Resolved TypeScript compilation errors
  - Fixed locale type conflicts with Next.js internal types
  - Ensured successful production builds with security features

- **Storybook**: Fixed compatibility issues
  - Moved Vite to devDependencies
  - Downgraded Vite to 6.0.7 for Storybook 9.1.3 compatibility
  - Storybook now works correctly on port 6006

### Security Audit Results

**Before v1.4.0:**

- 1 Critical vulnerability (Next.js RCE)
- 2 High vulnerabilities
- 3 Moderate vulnerabilities
- Total: 6 vulnerabilities

**After v1.4.0:**

- ✅ 0 vulnerabilities
- ✅ All security headers implemented
- ✅ Middleware protection active
- ✅ Production-ready and secure

## [1.3.1] - 2025-09-02

### Changed

- **Main Component**: Enhanced responsive design for logo image
  - Updated logo size classes: `w-48 h-48` for mobile, `w-100 h-100` for desktop (MD+)
  - Improved mobile user experience with better proportioned logo
  - Maintained high-quality image rendering with Next.js Image component
  - Enhanced visual hierarchy on smaller screens

### Technical Details

- Modified `/src/components/Main/index.tsx`
- Updated Tailwind CSS responsive utilities for better mobile experience
- Preserved image optimization and accessibility features
- No breaking changes - fully backward compatible

## [1.3.0] - 2025-09-02

### Added

- **Complete Internationalization (i18n) Support**
  - Automatic locale detection from browser Accept-Language headers
  - Multi-language support for English (en), Portuguese (pt), and Spanish (es)
  - SEO-friendly localized URLs (e.g., `/en/about`, `/pt/sobre`, `/es/acerca`)
  - Server-side translation loading with full type safety
  - Dynamic locale routing using Next.js 15 app directory

### Changed

- **URL Structure**: All routes now include locale prefix
- **Layout**: Root layout restructured for locale support
- **Navigation**: Updated to handle locale-aware routing

### Technical Features

- Middleware-based redirection for seamless locale handling
- Type-safe translation system with TypeScript support
- Fallback locale support for graceful degradation
- Client-side locale switching with usePathname hook
- Server-only imports for optimized bundle size

## [1.2.0] - 2025-09-02

### Added

- **Complete Docker Support**
  - Optimized Dockerfile with multi-stage build (~100MB final image)
  - Development Dockerfile with hot reload and volume mounting
  - docker-compose.yml for easy service orchestration
  - Convenience script (docker.sh) for common Docker operations
  - NPM scripts for streamlined Docker workflows

### Security & Optimization

- Non-root user in containers for enhanced security
- Alpine Linux base for minimal image footprint
- Next.js standalone output for optimal containerization
- Multi-stage builds reducing final image size by 75%

### Documentation

- Comprehensive Docker guide (DOCKER.md) with examples
- Updated README with Docker setup instructions
- Troubleshooting section for common Docker issues

## [1.1.0] - 2025-09-02

### Changed

- **Main Component**: Improved responsive design for logo image
  - Enhanced mobile user experience with appropriately sized logo
  - Maintained high-quality image rendering with Next.js Image component

### Technical Details

- Modified `/src/components/Main/index.tsx`
- Updated Tailwind CSS responsive utilities
- Preserved image optimization and accessibility features

## [1.0.0] - 2025-09-02

### Added

- Initial Next.js 15+ boilerplate with TypeScript
- Tailwind CSS integration
- Main component with responsive design
- ESLint and Prettier configuration
- GitHub Copilot instructions
- Project structure following Next.js app directory conventions

### Features

- Responsive typography scaling
- Optimized image loading with Next.js Image
- Mobile-first design approach
- TypeScript type safety
- Professional styling with Tailwind CSS

[1.3.1]: https://github.com/kode3tech/k3t-nextjs-boilerplate/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/kode3tech/k3t-nextjs-boilerplate/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/kode3tech/k3t-nextjs-boilerplate/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/kode3tech/k3t-nextjs-boilerplate/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/kode3tech/k3t-nextjs-boilerplate/releases/tag/v1.0.0
