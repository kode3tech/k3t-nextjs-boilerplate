# 🚀 K3T Next.js Boilerplate v1.3.0

We're excited to announce the latest release of the K3T Next.js Boilerplate! This release introduces **complete internationalization (i18n) support** with automatic locale detection, SEO-friendly URLs, and comprehensive multi-language capabilities.

## ✨ What's New in v1.3.0

### 🌐 Complete Internationalization Support

- **Automatic locale detection** from browser Accept-Language headers
- **Multi-language support** for English, Portuguese, and Spanish
- **SEO-friendly localized URLs** (e.g., `/en/about`, `/pt/sobre`, `/es/acerca`)
- **Server-side translation loading** with full type safety
- **Dynamic locale routing** using Next.js 15 app directory

### 🔧 Advanced i18n Features

- **Middleware-based redirection** for seamless locale handling
- **Type-safe translation system** with TypeScript support
- **Fallback locale support** for graceful degradation
- **Client-side locale switching** with usePathname hook
- **Server-only imports** for optimized bundle size

### 🚀 Developer Experience

- **Comprehensive test coverage** for i18n functionality
- **Easy-to-use hooks** for navigation and locale management
- **Modular translation dictionaries** for maintainable content
- **Zero-config setup** - works out of the box

## 🌍 Internationalization Features

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

### Adding New Languages

1. Create translation file: `src/dictionaries/fr.json`
2. Update locale config: `src/lib/i18n/i18n-config.ts`
3. Add to dictionary loader: `src/lib/i18n/get-dictionary.ts`

## 🔄 Migration from v1.2.0

### Breaking Changes

- **URL structure**: All routes now include locale prefix
- **Layout changes**: Root layout restructured for locale support
- **Component props**: Main component now accepts translation props

### Migration Steps

1. Update your routes to include locale parameters
2. Use `getDictionary()` for translated content
3. Replace hardcoded strings with translation keys
4. Test locale switching functionality

## 🛠️ Previous Docker Features (v1.2.0)

### 🐳 Complete Docker Support

- **Optimized Dockerfile** with multi-stage build (~100MB final image)
- **Development Dockerfile** with hot reload and volume mounting
- **docker-compose.yml** for easy service orchestration
- **Convenience script** (`docker.sh`) for common Docker operations
- **NPM scripts** for streamlined Docker workflows

### � Security & Optimization

- **Non-root user** in containers for enhanced security
- **Alpine Linux base** for minimal image footprint
- **Next.js standalone output** for optimal containerization
- **Multi-stage builds** reducing final image size by 75%

### 📖 Enhanced Documentation

- **Comprehensive Docker guide** (`DOCKER.md`) with examples
- **Updated README** with Docker setup instructions
- **Troubleshooting section** for common Docker issues

## 🐳 Docker Features

## 🐳 Docker Features

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

### Manual Docker Commands

```bash
# Production
docker build -t k3t-nextjs-boilerplate .
docker run -d -p 3000:3000 k3t-nextjs-boilerplate

# Development
docker build -f Dockerfile.dev -t k3t-nextjs-boilerplate:dev .
docker run -d -p 3001:3000 -v $(pwd):/app k3t-nextjs-boilerplate:dev
```

### Using NPM Scripts

```bash
npm run docker:build      # Build production image
npm run docker:run        # Run production container
npm run docker:build-dev  # Build development image
npm run docker:run-dev    # Run development container
```

### Core Technologies

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

### Key Features

- ✅ **100% Test Coverage** - Comprehensive testing setup
- ✅ **Type Safety** - Full TypeScript integration
- ✅ **Modern Styling** - Tailwind CSS 4 with utility-first approach
- ✅ **Developer Tools** - Complete linting and formatting pipeline
- ✅ **Documentation** - Storybook with accessibility testing
- ✅ **Automation** - Git hooks and CI/CD ready
- ✅ **Code Generation** - Automated component scaffolding

## 🚀 Quick Start

## 🎯 What's Included

### Core Technologies

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
- ✅ **Security** - Non-root containers and optimized builds

## 🚀 Quick Start

```bash
# Using latest version (v1.2.0)
npx create-next-app@latest my-project --example https://github.com/kode3tech/k3t-nextjs-boilerplate
cd my-project
npm install
npm run dev

# Using specific version
npx create-next-app@latest my-project --example https://github.com/kode3tech/k3t-nextjs-boilerplate/tree/v1.2.0
```

**Documentation:**

- 📖 [English README](README.md)
- 📖 [Portuguese README](README_PT.md)
- 🐳 [Docker Guide](DOCKER.md)

## 📊 What's Working

All systems are go! This release includes:

- ✅ Passing test suite with 100% coverage
- ✅ Lint-free codebase
- ✅ Successful production builds
- ✅ Comprehensive documentation
- ✅ Working CI/CD pipeline
- ✅ Optimized Docker containers
- ✅ Security-hardened images

## 🔄 Migration from v1.1.0

### New Files Added

- `Dockerfile` - Production container configuration
- `Dockerfile.dev` - Development container configuration
- `docker-compose.yml` - Service orchestration
- `docker.sh` - Convenience script for Docker operations
- `.dockerignore` - Docker build context optimization
- `DOCKER.md` - Comprehensive Docker documentation

### Updated Files

- `package.json` - Added Docker scripts and updated keywords
- `next.config.ts` - Added standalone output for Docker optimization
- `README.md` - Added Docker support section

### No Breaking Changes

All existing functionality remains intact. Docker support is additive and optional.

## 📈 Next Steps

We're planning exciting features for future releases:

- Kubernetes deployment examples
- CI/CD pipeline enhancements
- Additional Docker optimization
- Performance monitoring integration
- Multi-architecture builds

## 🤝 Contributing

We welcome contributions! Please check out our [Contributing Guide](CONTRIBUTING.md) to get started.

## 📄 License

MIT License - feel free to use this boilerplate for any project!

---

**Full Changelog**: https://github.com/kode3tech/k3t-nextjs-boilerplate/blob/main/CHANGELOG.md
