# 🚀 K3T Next.js Boilerplate v1.3.1

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
