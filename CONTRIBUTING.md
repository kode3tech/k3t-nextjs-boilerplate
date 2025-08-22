# 🤝 Contributing Guide

Thank you for considering contributing to **K3T Next.js Boilerplate**! This document contains guidelines to help you contribute effectively.

## 📋 Table of Contents

- [How to Contribute](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Improvements](#suggesting-improvements)
- [Development Process](#development-process)
- [Code Standards](#code-standards)
- [Commit Conventions](#commit-conventions)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Environment Setup](#environment-setup)

## 🚀 How to Contribute

### 1. Fork the Project

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/k3t-nextjs-boilerplate.git
cd k3t-nextjs-boilerplate

# Add the original repository as upstream
git remote add upstream https://github.com/kode3tech/k3t-nextjs-boilerplate.git
```

### 2. Setup Environment

```bash
# Install dependencies
npm install

# Setup Git hooks
npm run prepare

# Run tests to verify everything is working
npm run test
```

### 3. Create a Branch

```bash
# Always create a new branch for your changes
git checkout -b feature/new-functionality
# or
git checkout -b fix/bug-correction
# or
git checkout -b docs/documentation-improvement
```

## 🐛 Reporting Bugs

Before reporting a bug, check if it hasn't already been reported in the [Issues](https://github.com/kode3tech/k3t-nextjs-boilerplate/issues).

### Bug Report Template

```markdown
**Bug Description**
A clear and concise description of the bug.

**Steps to Reproduce**

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**

- OS: [e.g. iOS, Windows, Linux]
- Browser: [e.g. Chrome, Safari]
- Node Version: [e.g. 18.17.0]
- npm Version: [e.g. 9.6.7]
```

## 💡 Suggesting Improvements

### Feature Request Template

```markdown
**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

## 🛠️ Development Process

### 1. Keep your fork updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. Make your changes

- Write clean and well-documented code
- Add tests for new features
- Run tests: `npm run test`
- Run linter: `npm run lint`
- Check if build works: `npm run build`

### 3. Run tests

```bash
# Unit tests
npm run test

# Tests in watch mode (during development)
npm run test:watch

# Build and complete verification
npm run build
npm run build-storybook
```

## 📝 Code Standards

### TypeScript

- Use TypeScript for all files
- Define explicit types when necessary
- Use interfaces for complex objects
- Avoid `any` - prefer `unknown` when needed

```typescript
// ✅ Good
interface ComponentProps {
  title: string
  isVisible?: boolean
}

// ❌ Avoid
const props: any = { title: 'test' }
```

### React Components

- Use functional components with hooks
- Export the main component as default
- Use PascalCase for component names
- Keep components small and focused

```typescript
// ✅ Recommended structure
const MyComponent = ({ title, children }: MyComponentProps) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default MyComponent;
```

### Styling

- Use Tailwind CSS for styling
- Avoid custom CSS unless necessary
- Use utility classes consistently
- Prefer semantic classes when appropriate

```typescript
// ✅ Good
<div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">

// ❌ Avoid inline CSS
<div style={{ display: 'flex', padding: '16px' }}>
```

### Testing

- Write tests for all components
- Use React Testing Library
- Test behaviors, not implementation
- Keep tests simple and readable

```typescript
// ✅ Test example
test('should render component with title', () => {
  render(<MyComponent title="Test Title" />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});
```

## 📋 Commit Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Formatting, missing semi colons, etc; no code change
- `refactor:` - Code refactoring
- `test:` - Adding or fixing tests
- `chore:` - Changes to build tools, CI, etc

### Examples

```bash
feat: add component generator with plop
fix: resolve storybook configuration issue
docs: update README with installation guide
style: format code with prettier
refactor: simplify component props interface
test: add unit tests for Main component
chore: update dependencies
```

## 🔄 Pull Request Guidelines

### Before Submitting

- [ ] Code follows project standards
- [ ] Tests pass: `npm run test`
- [ ] Build works: `npm run build`
- [ ] Linting passes: `npm run lint`
- [ ] Storybook build works: `npm run build-storybook`
- [ ] Documentation was updated (if necessary)

### PR Template

```markdown
## Description

Brief description of the changes made.

## Type of Change

- [ ] Bug fix (change that fixes an issue)
- [ ] New feature (change that adds functionality)
- [ ] Breaking change (change that would break existing functionality)
- [ ] Documentation

## How to Test

1. Step 1
2. Step 2
3. Step 3

## Checklist

- [ ] My code follows the project standards
- [ ] I have performed a self-review of my code
- [ ] I have commented complex parts of the code
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing unit tests pass locally
```

## 🛠️ Environment Setup

### Prerequisites

- Node.js 18+
- npm 9+ (or yarn/pnpm equivalent)
- Git

### Recommended Extensions (VS Code)

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "steoates.autoimport-es6-ts",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Useful Scripts

```bash
# Development
npm run dev              # Start development server
npm run storybook        # Start Storybook

# Testing
npm run test             # Run tests
npm run test:watch       # Tests in watch mode
npm run test:ci          # Tests for CI

# Code Quality
npm run lint             # Run ESLint
npm run gen:component    # Generate new component

# Build
npm run build            # Production build
npm run build-storybook  # Build Storybook
```

## 🎯 Areas That Need Contribution

- 📚 **Documentation** - README improvements, guides, examples
- 🧪 **Tests** - Increase test coverage
- 🎨 **Components** - New utility components
- 🔧 **Tooling** - Development tool improvements
- 🐛 **Bug Fixes** - Corrections for reported issues
- ⚡ **Performance** - Performance optimizations

## 📞 Support

- 📧 **Email**: [Add contact email]
- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Use GitHub Issues for bugs and feature requests

## 🏆 Recognition

All contributors will be recognized! Contributions will appear:

- In the CONTRIBUTORS.md file
- In release notes
- In the acknowledgments section

---

**Thank you for contributing to K3T Next.js Boilerplate! 🚀**

Let's transform ideas into efficient and innovative solutions, together!
