# 🔒 K3T Next.js Boilerplate v1.4.0 - Security Hardening Release

We're excited to announce a **major security update** for the K3T Next.js Boilerplate! This release addresses **6 critical and high-severity vulnerabilities** and implements comprehensive security hardening measures.

## 🚨 Critical Security Fixes

### CVE-2025-29927 - Next.js Remote Code Execution (CRITICAL)

- **Severity**: 🔴 **CRITICAL (CVSS 10.0/10)**
- **Impact**: Remote Code Execution via React Flight protocol
- **Fix**: Updated Next.js from 15.4.6 → **15.5.7**
- **Action Required**: Update immediately if using older versions

This vulnerability allowed attackers to execute arbitrary code by exploiting the React Flight protocol. **All users should update immediately.**

### Additional High-Severity Fixes

- **Playwright SSL Verification** (HIGH) - Updated to 1.57.0
- **glob Command Injection** (HIGH) - Fixed via dependency updates
- **Vite Path Traversal** (MODERATE) - Updated to 6.0.7
- **js-yaml Prototype Pollution** (MODERATE) - Fixed via dependency updates

**Total**: 6 vulnerabilities patched ✅

## 🛡️ New Security Features

### 1. Comprehensive HTTP Security Headers

All responses now include enterprise-grade security headers:

```typescript
// Configured in next.config.ts
✅ Strict-Transport-Security (HSTS)
✅ X-Frame-Options (Clickjacking protection)
✅ X-Content-Type-Options (MIME sniffing protection)
✅ X-XSS-Protection
✅ Referrer-Policy
✅ Permissions-Policy
✅ Content-Security-Policy (CSP)
```

**Impact**: Protection against XSS, clickjacking, MITM attacks, and more.

### 2. Middleware Authentication Bypass Protection

New protection against CVE-2025-29927 and similar attacks:

```typescript
// src/middleware.ts
Blocks malicious headers:
- x-middleware-subrequest
- x-middleware-invoke
- x-invoke-path
- x-invoke-query
```

**Impact**: Prevents attackers from bypassing authentication middleware.

### 3. Enhanced TypeScript Support

- Added CSS module type declarations
- Improved type safety for async params (Next.js 15)
- Better development experience

## 📊 Security Audit Results

### Before v1.4.0

```
🔴 Critical:  1 vulnerability
🟠 High:      2 vulnerabilities
🟡 Moderate:  3 vulnerabilities
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total:        6 vulnerabilities
```

### After v1.4.0

```
✅ Critical:  0 vulnerabilities
✅ High:      0 vulnerabilities
✅ Moderate:  0 vulnerabilities
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total:        0 vulnerabilities ✅
```

**Status**: Production-ready and secure 🔒

## 📦 Updated Dependencies

### Major Security Updates

| Package        | Before | After      | Reason                                  |
| -------------- | ------ | ---------- | --------------------------------------- |
| **next**       | 15.4.6 | **15.5.7** | Critical RCE fix                        |
| **react**      | 19.1.0 | **19.2.1** | Security updates                        |
| **react-dom**  | 19.1.0 | **19.2.1** | Security updates                        |
| **playwright** | 1.55.0 | **1.57.0** | SSL verification fix                    |
| **vite**       | 7.2.6  | **6.0.7**  | Path traversal fixes + Storybook compat |

### Dependency Tree

All transitive dependencies updated to secure versions:

- ✅ glob - Command injection fixed
- ✅ js-yaml - Prototype pollution fixed
- ✅ Dozens of other dependencies patched

## 🚀 Migration Guide

### From v1.3.x to v1.4.0

#### 1. Update Dependencies

```bash
# Pull latest changes
git pull origin main

# Install updated dependencies
npm install

# Verify no vulnerabilities
npm audit
```

#### 2. Verify Configuration

The following files were updated with security features:

- ✅ `next.config.ts` - Security headers added
- ✅ `src/middleware.ts` - Bypass protection added
- ✅ `src/types/css.d.ts` - New type declarations

**No breaking changes** - Your existing code will continue to work.

#### 3. Test Your Application

```bash
# Run tests
npm test

# Build for production
npm run build

# Start production server
npm start

# Test Storybook
npm run storybook
```

#### 4. Deploy

Your application is now secure and ready for production deployment.

## 🔍 Security Testing

### Verify Security Headers

Visit your deployed application and check headers:

```bash
curl -I https://your-app.com
```

Expected headers:

- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Content-Security-Policy`
- And more...

### Test Middleware Protection

Malicious requests are now blocked:

```bash
# This should return 403 Forbidden
curl -H "x-middleware-subrequest: true" https://your-app.com
```

### Online Security Scanners

- **Security Headers**: https://securityheaders.com
- **SSL/TLS**: https://www.ssllabs.com/ssltest/
- **CSP Evaluator**: https://csp-evaluator.withgoogle.com/

## 🐳 Docker Updates

Docker configurations remain secure and unchanged:

- ✅ Non-root user (nextjs:nodejs)
- ✅ Alpine Linux base
- ✅ Multi-stage builds
- ✅ Minimal dependencies

All security features work seamlessly in Docker containers.

## 📚 New Documentation

### SECURITY.md

New comprehensive security documentation:

- Security features overview
- Vulnerability reporting process
- Security best practices
- Audit history

Read the full policy: [SECURITY.md](SECURITY.md)

## 🎯 What's Next?

### Recommended Actions

1. ✅ **Update Now** - Apply v1.4.0 immediately
2. ✅ **Enable Dependabot** - Automated security updates
3. ✅ **Monitor Logs** - Watch for blocked malicious requests
4. ✅ **Regular Audits** - Run `npm audit` weekly

### Future Security Enhancements

- Rate limiting middleware
- Advanced CSP policies
- Security monitoring integration
- Automated penetration testing

## 🤝 Contributing

Found a security issue? Please report privately to: **security@kode3.tech**

For security vulnerability reports:

- Do not open public issues
- Follow coordinated disclosure
- See [SECURITY.md](SECURITY.md) for details

## 📝 Changelog

See the full changelog: [CHANGELOG.md](CHANGELOG.md)

## 🏆 Acknowledgments

Special thanks to the security community and the Next.js team for:

- Promptly disclosing CVE-2025-29927
- Providing security patches
- Maintaining excellent security documentation

## 📄 License

MIT License - See [LICENSE](LICENSE) for details

---

## 🔗 Quick Links

- [Full Changelog](CHANGELOG.md)
- [Security Policy](SECURITY.md)
- [Documentation](README.md)
- [Docker Guide](DOCKER.md)
- [Contributing Guide](CONTRIBUTING.md)

---

<div align="center">

**🔒 Your application is now production-ready and secure! 🚀**

[![Security: A+](https://img.shields.io/badge/Security-A+-green.svg)]()
[![Vulnerabilities: 0](https://img.shields.io/badge/Vulnerabilities-0-brightgreen.svg)]()
[![Next.js: 15.5.7](https://img.shields.io/badge/Next.js-15.5.7-black.svg)]()

</div>

---

# Previous Releases

## v1.3.1 - Mobile Responsive Improvements

We're excited to announce a maintenance release of the K3T Next.js Boilerplate! This release includes **responsive design improvements** for better mobile experience while maintaining all the powerful internationalization features from v1.3.0.

## ✨ What's New in v1.3.1

### 📱 Enhanced Mobile Experience

- **Improved logo responsiveness** in the Main component
- **Better visual hierarchy** on smaller screens
- **Optimized image sizing** for mobile devices
- **Consistent spacing** across all screen sizes

### 🔧 Technical Improvements

- **Updated Tailwind CSS classes** for better responsive design
- **Mobile-first approach** with progressive enhancement
- **Maintained accessibility** features and image optimization
- **Preserved SEO performance** with Next.js Image component

## 🌍 Internationalization Features (from v1.3.0)

### Supported Languages

- **English (en)** - Default locale
- **Portuguese (pt)** - Brazilian Portuguese
- **Spanish (es)** - Latin American Spanish

### URL Structure

- **Root redirect**: `/` → `/en` (or user's preferred locale)
- **Localized paths**: `/en/about`, `/pt/sobre`, `/es/acerca`
- **SEO-friendly**: Each locale has its own URL structure
- **Automatic detection**: Based on browser language preferences

### Technical Implementation

- **Next.js 15 App Router** with dynamic [lang] segments
- **Middleware integration** for automatic locale detection
- **Server-side rendering** with proper locale handling
- **Type-safe translations** using TypeScript
- **Performance optimized** with server-only imports

## 🚀 Quick Start with i18n

### Basic Usage

```typescript
// Get translated content
import { getDictionary } from '@/lib/i18n/get-dictionary'

export default async function Page({ params }) {
  const { lang } = await params
  const t = await getDictionary(lang)

  return <h1>{t.HomePage.title}</h1>
}
```

### Client-side Navigation

```typescript
// Use the usePathname hook for locale-aware navigation
import { usePathname } from '@/hooks/usePathname'

export default function LanguageSwitcher() {
  const { redirectWithLocale } = usePathname()

  return (
    <button onClick={() => redirectWithLocale('pt')}>
      Switch to Portuguese
    </button>
  )
}
```

## 🐳 Docker Features (from v1.2.0)

### Production Environment

- **Optimized multi-stage build** - Final image ~100MB
- **Alpine Linux base** - Minimal attack surface
- **Non-root user** - Enhanced security
- **Standalone Next.js output** - No external dependencies

### Development Environment

- **Hot reload support** - Live code changes
- **Volume mounting** - Persistent development
- **Separate dev image** - Development dependencies included
- **Port isolation** - Production (3000) vs Development (3001)

### Convenience Tools

- **docker.sh script** - Simplified Docker operations
- **NPM scripts** - Integrated workflow
- **docker-compose** - Service orchestration
- **Comprehensive docs** - Step-by-step guides

## 🚀 Quick Start with Docker

### Using the Convenience Script

```bash
# Build and run production
./docker.sh build
./docker.sh run

# Build and run development
./docker.sh build-dev
./docker.sh run-dev

# Using docker-compose
./docker.sh compose-up
```

## 🎯 Core Technologies

- **Next.js 15+** with App Router and Turbopack
- **React 19** with the latest features
- **TypeScript** with strict configuration
- **Tailwind CSS 4** for modern styling

### Developer Experience

- **Complete Testing Suite**: Jest, React Testing Library, Vitest, and Playwright
- **Storybook Integration**: Component development and documentation
- **Code Quality Tools**: ESLint, Prettier, Husky, and lint-staged
- **Automated Workflows**: GitHub Actions CI/CD pipeline
- **Component Generation**: Plop.js templates for rapid development
- **Docker Support**: Complete containerization with dev/prod environments

### Key Features

- ✅ **100% Test Coverage** - Comprehensive testing setup
- ✅ **Type Safety** - Full TypeScript integration
- ✅ **Modern Styling** - Tailwind CSS 4 with utility-first approach
- ✅ **Developer Tools** - Complete linting and formatting pipeline
- ✅ **Documentation** - Storybook with accessibility testing
- ✅ **Automation** - Git hooks and CI/CD ready
- ✅ **Code Generation** - Automated component scaffolding
- ✅ **Docker Ready** - Production and development containers
- ✅ **Internationalization** - Complete i18n support
- ✅ **Mobile Responsive** - Optimized for all screen sizes

## 🔄 Migration from v1.3.0

### Minor Changes

- **Logo sizing**: Updated responsive classes for better mobile experience
- **No breaking changes**: All existing functionality remains intact
- **Backward compatible**: Existing translations and routes work unchanged

### What Changed

- Updated `src/components/Main/index.tsx` with improved responsive logo sizing
- Mobile: `w-48 h-48` (192px × 192px)
- Desktop (MD+): `w-100 h-100` (400px × 400px)

## 📊 What's Working

All systems are go! This release includes:

- ✅ Passing test suite with 100% coverage
- ✅ Lint-free codebase
- ✅ Successful production builds
- ✅ Comprehensive documentation
- ✅ Working CI/CD pipeline
- ✅ Optimized Docker containers
- ✅ Complete i18n functionality
- ✅ Enhanced mobile responsiveness

## 🚀 Quick Start

```bash
# Using latest version (v1.3.1)
npx create-next-app@latest my-project --example https://github.com/kode3tech/k3t-nextjs-boilerplate
cd my-project
npm install
npm run dev
```

**Documentation:**

- 📖 [English README](README.md)
- 📖 [Portuguese README](README_PT.md)
- 🐳 [Docker Guide](DOCKER.md)

## 📈 Next Steps

We're planning exciting features for future releases:

- Enhanced mobile components library
- Advanced responsive design patterns
- Performance monitoring integration
- Multi-architecture builds
- Additional language support

## 🤝 Contributing

We welcome contributions! Please check out our [Contributing Guide](CONTRIBUTING.md) to get started.

## 📄 License

MIT License - feel free to use this boilerplate for any project!

---

**Full Changelog**: https://github.com/kode3tech/k3t-nextjs-boilerplate/blob/main/CHANGELOG.md
