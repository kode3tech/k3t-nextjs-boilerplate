# 🚀 K3T Next.js Boilerplate

[![CI](https://github.com/kode3tech/k3t-nextjs-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/kode3tech/k3t-nextjs-boilerplate/actions/workflows/ci.yml)

A complete and modern **Next.js 15+ boilerplate** for developing React applications with TypeScript, configured with development best practices, code quality tools, and automation. Perfect starter template for frontend developers who want a production-ready setup.

## ✨ Features

- 🏗️ **Next.js 15+ with App Router** - Latest React framework with Turbopack
- 🔷 **TypeScript** - Full type safety and better developer experience
- 🎨 **Tailwind CSS 4** - Modern utility-first CSS framework
- 🧪 **Complete Testing Suite** - Jest, React Testing Library, Vitest, and Playwright
- 📚 **Storybook** - Component development and documentation
- 🔍 **Code Quality** - ESLint, Prettier, Husky, and Lint-staged
- 🚀 **CI/CD Pipeline** - GitHub Actions for automated testing and deployment
- 🛠️ **Code Generation** - Plop templates for rapid development
- 📦 **Modern Stack** - Latest versions of all dependencies
- 🏆 **Best Practices** - Industry-standard project structure and conventions

**English** | [Português](README_PT.md)

## ⚡ Technologies Used

### Core Framework

- **[Next.js 15+](https://nextjs.org/)** - React framework with App Router, Turbopack and advanced optimizations
- **[React 19](https://react.dev/)** - Library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript superset with static typing

### Styling

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - Tool for CSS transformation

### Testing

- **[Jest](https://jestjs.io/)** - JavaScript testing framework
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Utilities for testing React components
- **[Vitest](https://vitest.dev/)** - Fast test runner
- **[Playwright](https://playwright.dev/)** - Framework for end-to-end testing

### Documentation

- **[Storybook](https://storybook.js.org/)** - Tool for component development and documentation

### Code Quality

- **[ESLint](https://eslint.org/)** - Linter for identifying code problems
- **[Prettier](https://prettier.io/)** - Code formatter
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for automation
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files

### Code Generation

- **[Plop](https://plopjs.com/)** - Template-based code generator

### CI/CD

- **[GitHub Actions](https://docs.github.com/en/actions)** - Continuous integration and deployment pipeline

## 🛠️ Project Structure

```
k3t-nextjs-boilerplate/
├── .github/
│   ├── workflows/
│   │   └── ci.yml              # CI/CD Pipeline
│   └── copilot-instructions.md # AI Instructions
├── generators/
│   ├── templates/              # Plop Templates
│   └── plopfile.js            # Generator Configuration
├── public/                     # Static Files
├── src/
│   ├── app/                   # App Router (Next.js 13+)
│   │   ├── globals.css       # Global Styles
│   │   ├── layout.tsx        # Root Layout
│   │   └── page.tsx          # Home Page
│   └── components/           # Reusable Components
│       └── Main/
│           ├── index.tsx     # Component
│           ├── stories.tsx   # Storybook stories
│           └── test.tsx      # Tests
├── jest.config.js            # Jest Configuration
├── vitest.config.ts          # Vitest Configuration
└── package.json              # Dependencies and scripts
```

## 🚀 How to Use This Boilerplate

### 1. Create a New Project

Use the `create-next-app` command with this boilerplate as an example:

#### Latest Version (Recommended)

```bash
npx create-next-app@latest my-new-project --example https://github.com/kode3tech/k3t-nextjs-boilerplate
cd my-new-project
```

#### Specific Version

```bash
# Using version tag (e.g., v1.0.0)
npx create-next-app@latest my-new-project --example https://github.com/kode3tech/k3t-nextjs-boilerplate/tree/v1.0.0

# Using specific commit
npx create-next-app@latest my-new-project --example https://github.com/kode3tech/k3t-nextjs-boilerplate/tree/9e596e7

# Using specific branch
npx create-next-app@latest my-new-project --example https://github.com/kode3tech/k3t-nextjs-boilerplate/tree/main
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure the Project

1. **Update `package.json`**:

   ```json
   {
     "name": "my-new-project",
     "version": "0.1.0",
     "description": "Description of your project"
   }
   ```

2. **Initialize Git (if necessary)**:

   ```bash
   git init
   git add .
   git commit -m "feat: initial project setup"
   ```

3. **Customize the content**:
   - Edit `src/app/page.tsx` for your homepage
   - Update `src/app/layout.tsx` with your project metadata
   - Replace the logo in `public/logo.svg`

## 📋 Available Scripts

| Script                    | Description                             |
| ------------------------- | --------------------------------------- |
| `npm run dev`             | Start development server with Turbopack |
| `npm run build`           | Create production build                 |
| `npm run start`           | Start production server                 |
| `npm run lint`            | Run ESLint                              |
| `npm run test`            | Run tests with Jest                     |
| `npm run test:watch`      | Run tests in watch mode                 |
| `npm run test:ci`         | Run tests for CI                        |
| `npm run gen:component`   | Generate new component with template    |
| `npm run storybook`       | Start Storybook                         |
| `npm run build-storybook` | Build Storybook                         |

## 🧩 Generating Components

Use the automatic generator to create new components:

```bash
npm run gen:component
```

This will create:

- `src/components/YourComponent/index.tsx` - React component
- `src/components/YourComponent/stories.tsx` - Storybook stories
- `src/components/YourComponent/test.tsx` - Unit tests

## 🧪 Testing

### Unit Tests

```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode
npm run test:ci          # For CI/CD
```

### E2E Tests (Manual Setup)

```bash
npx playwright install    # Install browsers
npx playwright test       # Run E2E tests
```

## 📚 Storybook

Develop and document components in isolation:

```bash
npm run storybook         # Start at http://localhost:6006
npm run build-storybook   # Build for production
```

## 🔧 IDE Setup

### VS Code

Recommended extensions:

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### EditorConfig Setup

The project includes `.editorconfig` for consistency across different editors.

## � Docker Support

The boilerplate includes complete Docker support with optimized multi-stage builds for both development and production environments.

### Quick Start with Docker

Using the included convenience script:

```bash
# Build production image
./docker.sh build

# Run production container
./docker.sh run

# Build and run development container
./docker.sh build-dev
./docker.sh run-dev

# Using docker-compose
./docker.sh compose-up

# View logs
./docker.sh logs

# Stop containers
./docker.sh stop

# Clean up
./docker.sh clean
```

### Manual Docker Commands

```bash
# Build production image
docker build -t k3t-nextjs-boilerplate .

# Run production container
docker run -d -p 3000:3000 --name k3t-nextjs-app k3t-nextjs-boilerplate

# Build development image
docker build -f Dockerfile.dev -t k3t-nextjs-boilerplate:dev .

# Run development container with hot reload
docker run -d -p 3001:3000 -v $(pwd):/app -v /app/node_modules --name k3t-nextjs-dev k3t-nextjs-boilerplate:dev
```

### Docker Compose

```bash
# Production environment
docker-compose up -d

# Development environment
docker-compose --profile dev up -d
```

### Docker Features

- **Multi-stage builds** - Optimized image size (~100MB final image)
- **Non-root user** - Enhanced security
- **Development support** - Hot reload with volume mounting
- **Production ready** - Standalone Next.js output
- **Minimal dependencies** - Only production files in final image

## �🚢 Deploy

### Vercel (Recommended)

1. Connect your repository on [Vercel](https://vercel.com)
2. Configure environment variables
3. Automatic deployment on every push

### Other Platforms

- **Netlify**: Native Next.js support
- **AWS Amplify**: Deploy with integrated CI/CD
- **Docker**: Dockerfile included for containerization

## 🤝 Contributing

1. Fork the project
2. Create a branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'feat: add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📋 Conventions

### Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting
- `refactor:` for refactoring
- `test:` for tests

### Code

- Use TypeScript for all files
- Components in PascalCase
- Configuration files in kebab-case
- Use Prettier for automatic formatting

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 🏢 About Kode3 Tech

We transform ideas into efficient and innovative solutions.

---

⭐ If this boilerplate was useful, consider giving the repository a star!
