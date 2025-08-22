# 🚀 K3T Next.js Boilerplate

[![CI](https://github.com/kode3tech/k3t-nextjs-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/kode3tech/k3t-nextjs-boilerplate/actions/workflows/ci.yml)

Um boilerplate completo e moderno para desenvolvimento de aplicações React com Next.js, configurado com as melhores práticas de desenvolvimento, ferramentas de qualidade de código e automação.

## ⚡ Tecnologias Utilizadas

### Core Framework

- **[Next.js 15+](https://nextjs.org/)** - Framework React com App Router, Turbopack e otimizações avançadas
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### Estilização

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Ferramenta para transformação de CSS

### Testes

- **[Jest](https://jestjs.io/)** - Framework de testes JavaScript
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Utilitários para teste de componentes React
- **[Vitest](https://vitest.dev/)** - Runner de testes rápido
- **[Playwright](https://playwright.dev/)** - Framework para testes end-to-end

### Documentação

- **[Storybook](https://storybook.js.org/)** - Ferramenta para desenvolvimento e documentação de componentes

### Qualidade de Código

- **[ESLint](https://eslint.org/)** - Linter para identificação de problemas no código
- **[Prettier](https://prettier.io/)** - Formatador de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks para automação
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Execução de linters em arquivos staged

### Geração de Código

- **[Plop](https://plopjs.com/)** - Gerador de código baseado em templates

### CI/CD

- **[GitHub Actions](https://docs.github.com/en/actions)** - Pipeline de integração e deployment contínuo

## 🛠️ Estrutura do Projeto

```
k3t-nextjs-boilerplate/
├── .github/
│   ├── workflows/
│   │   └── ci.yml              # Pipeline CI/CD
│   └── copilot-instructions.md # Instruções para IA
├── generators/
│   ├── templates/              # Templates do Plop
│   └── plopfile.js            # Configuração do gerador
├── public/                     # Arquivos estáticos
├── src/
│   ├── app/                   # App Router (Next.js 13+)
│   │   ├── globals.css       # Estilos globais
│   │   ├── layout.tsx        # Layout raiz
│   │   └── page.tsx          # Página inicial
│   └── components/           # Componentes reutilizáveis
│       └── Main/
│           ├── index.tsx     # Componente
│           ├── stories.tsx   # Storybook stories
│           └── test.tsx      # Testes
├── jest.config.js            # Configuração do Jest
├── vitest.config.ts          # Configuração do Vitest
└── package.json              # Dependências e scripts
```

## 🚀 Como Usar Este Boilerplate

### 1. Crie um Novo Projeto

Use o comando `create-next-app` com este boilerplate como exemplo:

```bash
npx create-next-app@latest meu-novo-projeto --example https://github.com/kode3tech/k3t-nextjs-boilerplate
cd meu-novo-projeto
```

### 2. Instale as Dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure o Projeto

1. **Atualize o `package.json`**:

   ```json
   {
     "name": "meu-novo-projeto",
     "version": "0.1.0",
     "description": "Descrição do seu projeto"
   }
   ```

2. **Initialize Git (se necessário)**:

   ```bash
   git init
   git add .
   git commit -m "feat: initial project setup"
   ```

3. **Personalize o conteúdo**:
   - Edite `src/app/page.tsx` para sua página inicial
   - Atualize `src/app/layout.tsx` com metadados do seu projeto
   - Substitua o logo em `public/logo.svg`

## 📋 Scripts Disponíveis

| Script                    | Descrição                                          |
| ------------------------- | -------------------------------------------------- |
| `npm run dev`             | Inicia o servidor de desenvolvimento com Turbopack |
| `npm run build`           | Cria build de produção                             |
| `npm run start`           | Inicia servidor de produção                        |
| `npm run lint`            | Executa ESLint                                     |
| `npm run test`            | Executa testes com Jest                            |
| `npm run test:watch`      | Executa testes em modo watch                       |
| `npm run test:ci`         | Executa testes para CI                             |
| `npm run gen:component`   | Gera novo componente com template                  |
| `npm run storybook`       | Inicia Storybook                                   |
| `npm run build-storybook` | Build do Storybook                                 |

## 🧩 Gerando Componentes

Use o gerador automático para criar novos componentes:

```bash
npm run gen:component
```

Isso criará:

- `src/components/SeuComponente/index.tsx` - Componente React
- `src/components/SeuComponente/stories.tsx` - Stories do Storybook
- `src/components/SeuComponente/test.tsx` - Testes unitários

## 🧪 Testes

### Testes Unitários

```bash
npm run test              # Executa todos os testes
npm run test:watch        # Modo watch
npm run test:ci          # Para CI/CD
```

### Testes E2E (Configuração Manual)

```bash
npx playwright install    # Instala browsers
npx playwright test       # Executa testes E2E
```

## 📚 Storybook

Desenvolva e documente componentes isoladamente:

```bash
npm run storybook         # Inicia em http://localhost:6006
npm run build-storybook   # Build para produção
```

## 🔧 Configuração de IDE

### VS Code

Extensões recomendadas:

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### Configuração do EditorConfig

O projeto inclui `.editorconfig` para consistência entre diferentes editores.

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify**: Suporte nativo para Next.js
- **AWS Amplify**: Deploy com CI/CD integrado
- **Docker**: Dockerfile incluído para containerização

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📋 Convenções

### Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` para novas funcionalidades
- `fix:` para correções
- `docs:` para documentação
- `style:` para formatação
- `refactor:` para refatoração
- `test:` para testes

### Código

- Use TypeScript para todos os arquivos
- Componentes em PascalCase
- Arquivos de configuração em kebab-case
- Use Prettier para formatação automática

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🏢 Sobre a Kode3 Tech

Transformamos ideias em soluções eficientes e inovadoras.

---

⭐ Se este boilerplate foi útil, considere dar uma estrela no repositório!
