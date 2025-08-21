# Copilot Instructions for AI Coding Agents

## Project Overview

- This is a Next.js 15+ boilerplate using the `/app` directory structure, TypeScript, and Tailwind CSS.
- The project is bootstrapped with `create-next-app` and follows Vercel/Next.js conventions.
- Main entry: `src/app/page.tsx` (edit this to change the homepage).
- Global styles: `src/app/globals.css`.
- Public assets: `public/` (SVGs, icons, etc).

## Key Workflows

- **Development:**
  - Start dev server: `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
  - Access at [http://localhost:3000](http://localhost:3000)
- **Build:**
  - Production build: `npm run build`
  - Start production server: `npm run start`
- **Linting & Formatting:**
  - Lint: `npm run lint` (uses ESLint with Prettier integration)
  - Prettier config: `.prettierrc`, `.prettierignore`
  - Lint-staged: see `.lintstagedrc.js` for pre-commit formatting
- **Type Checking:**
  - TypeScript config: `tsconfig.json`

## Conventions & Patterns

- **File Structure:**
  - All app routes/pages/components live under `src/app/`
  - Use TypeScript for all code (`.ts`, `.tsx`)
  - Use named exports for components
- **Styling:**
  - Tailwind CSS is configured via `postcss.config.mjs` and `tailwindcss` in `devDependencies`
  - Use utility classes in JSX; avoid custom CSS unless necessary
- **ESLint:**
  - Uses `eslint-config-next` and `eslint-config-prettier` for Next.js and Prettier compatibility
  - Custom rules can be added in `.eslintrc` (if present)

## Integration Points

- No backend or API routes included by default
- No database or external service integration out of the box
- Designed for rapid prototyping and extension

## Examples

- To add a new page: create a file in `src/app/yourpage/page.tsx`
- To add a global style: edit `src/app/globals.css`
- To add a static asset: place it in `public/`

## References

- See `README.md` for getting started and deployment info
- For advanced Next.js usage, refer to [Next.js docs](https://nextjs.org/docs)

---

_Update this file if you introduce new conventions, workflows, or architectural changes._
