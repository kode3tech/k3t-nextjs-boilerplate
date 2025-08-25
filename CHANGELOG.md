# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2025-08-25

### Added

- 🌐 **Complete Internationalization (i18n) Support** with Next.js 15
- 🔧 **Automatic locale detection** using Accept-Language headers
- 🌍 **Multi-language support** for English (en), Portuguese (pt), and Spanish (es)
- 📄 **Dynamic locale routing** with [lang] parameter structure
- 🎯 **Server-side translation loading** with type safety
- 🔄 **Middleware for automatic locale redirection**
- 🚀 **SEO-friendly localized URLs** (e.g., /en/about, /pt/sobre, /es/acerca)
- 🎨 **usePathname hook** for client-side navigation with locale support
- 📚 **Translation dictionaries** for all supported languages
- 🛡️ **Type-safe i18n configuration** with TypeScript support
- 🧪 **Comprehensive test coverage** for i18n functionality

### Improved

- 🏗️ **App structure refactored** to support dynamic locale routing
- 📱 **Main component enhanced** to accept translated props
- 🔍 **Jest configuration updated** to exclude i18n files from coverage reports
- 📋 **ESLint configuration** updated for new test patterns

### Dependencies

- ➕ **@formatjs/intl-localematcher** - Advanced locale matching
- ➕ **negotiator** - Accept-Language header parsing
- ➕ **server-only** - Server-side code isolation
- ➕ **@types/negotiator** - TypeScript definitions

### Breaking Changes

- 🔄 **URL structure changed** - All routes now include locale prefix (e.g., /en/page)
- 🏗️ **Root layout restructured** to support dynamic locales
- 🎨 **Main component API updated** to accept title and description props

### i18n Features

- **Browser language detection** - Automatic locale selection based on user preferences
- **Fallback support** - Graceful fallback to default locale (English)
- **Server-side rendering** - Proper locale handling with SSR
- **Client-side locale switching** - Dynamic language switching capabilities
- **Type-safe translations** - Full TypeScript support for translation keys
- **Middleware integration** - Seamless locale detection and redirection
- **404 handling** - Localized error pages with proper fallbacks

## [1.2.0] - 2025-08-23

### Added

- 🐳 **Complete Docker Support** with optimized multi-stage builds
- 📦 **Production Dockerfile** with ~100MB final image size
- 🛠️ **Development Dockerfile** with hot reload support
- 🔧 **docker-compose.yml** for easy orchestration
- 📋 **Docker convenience script** (`docker.sh`) for common operations
- 🚀 **NPM scripts** for Docker operations
- 📖 **Comprehensive Docker documentation** (`DOCKER.md`)
- 🔒 **Security features** - non-root user in containers
- ⚙️ **Next.js standalone output** for optimized Docker builds

### Improved

- 🏗️ **Next.js configuration** optimized for containerization
- 📄 **Dockerfile.dev** for development with volume mounting
- 🐳 **Multi-stage builds** for production optimization
- 🔍 **Enhanced .dockerignore** for optimized build context
- 📋 **Extended keywords** in package.json for Docker discoverability

### Docker Features

- **Multi-stage builds** - Optimized for production
- **Alpine Linux base** - Minimal image footprint
- **Non-root user** - Enhanced security
- **Development support** - Hot reload with volumes
- **Production ready** - Standalone Next.js output
- **Convenience scripts** - Easy Docker operations

## [1.1.0] - 2025-08-23

### Added

- 🌐 **Portuguese README** (`README_PT.md`) for Brazilian developers
- 📋 **GitHub repository description** (`.github/DESCRIPTION`) for better discoverability
- ✨ **Enhanced Features section** in README with detailed highlights
- 🔍 **30+ SEO-optimized keywords** in package.json for better searchability

### Improved

- 📈 **SEO optimization** for GitHub repository discovery
- 🎯 **Enhanced README.md** with feature highlights and better structure
- 🏷️ **Expanded keywords** covering Next.js, React, TypeScript, testing, and developer tools
- 🌍 **Multi-language support** (English/Portuguese) for broader reach

### SEO Enhancements

- Keywords now include: `nextjs-boilerplate`, `react-typescript`, `tailwind-template`, `frontend-template`
- Better discoverability for terms like `modern-stack`, `developer-tools`, `code-quality`
- Optimized for searches related to `testing`, `ci-cd`, `component-library`

## [1.0.1] - 2025-08-23

### Improved

- 📚 Enhanced documentation with version-specific installation examples
- 🔗 Added examples for using specific versions with create-next-app
- 📖 Improved README.md with tag-based, commit-based, and branch-based installation options
- ✨ Better user experience for developers who need specific versions

## [1.0.0] - 2025-08-23

### Added

- 🎉 Initial release of K3T Next.js Boilerplate
- ⚡ Next.js 15+ with App Router and Turbopack support
- 🔷 TypeScript configuration with strict typing
- 🎨 Tailwind CSS 4 for utility-first styling
- 🧪 Complete testing setup with Jest, React Testing Library, Vitest, and Playwright
- 📚 Storybook integration for component development and documentation
- 🔍 ESLint and Prettier for code quality and formatting
- 🪝 Husky and lint-staged for Git hooks automation
- 🏗️ Plop.js for automated component generation
- 🚀 GitHub Actions CI/CD pipeline
- 📖 Comprehensive documentation and setup instructions
- 🧩 Sample Main component with tests and stories
- 🎯 Optimized build configuration
- 📦 Modern React 19 support
- 🛠️ Developer experience optimizations

### Features

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS 4 with PostCSS
- **Testing**: Jest + React Testing Library + Vitest + Playwright
- **Documentation**: Storybook with accessibility addon
- **Code Quality**: ESLint + Prettier + Husky + lint-staged
- **Generation**: Plop.js templates for components
- **CI/CD**: GitHub Actions workflow
- **Developer Tools**: Comprehensive scripts and configurations

### Configuration

- ✅ Jest and Vitest test environments
- ✅ ESLint with Next.js and Prettier integration
- ✅ Husky pre-commit hooks
- ✅ TypeScript strict mode
- ✅ Tailwind CSS with modern configuration
- ✅ Storybook with addon ecosystem
- ✅ GitHub Actions CI pipeline
- ✅ Component generation templates

[1.0.0]: https://github.com/kode3tech/k3t-nextjs-boilerplate/releases/tag/v1.0.0
