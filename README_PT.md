# 🚀 K3T Next.js Boilerplate

<div align="center">

[![CI](https://github.com/kode3tech/k3t-nextjs-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/kode3tech/k3t-nextjs-boilerplate/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/v/release/kode3tech/k3t-nextjs-boilerplate)](https://github.com/kode3tech/k3t-nextjs-boilerplate/releases)
[![GitHub stars](https://img.shields.io/github/stars/kode3tech/k3t-nextjs-boilerplate?style=social)](https://github.com/kode3tech/k3t-nextjs-boilerplate/stargazers)

![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)

</div>

Um **boilerplate completo e moderno do Next.js 15+** para desenvolvimento de aplicações React com TypeScript, configurado com melhores práticas de desenvolvimento, ferramentas de qualidade de código e automação. Template perfeito para desenvolvedores frontend que querem uma configuração pronta para produção.

## ✨ Características

- 🏗️ **Next.js 15+ com App Router** - Framework React mais recente com Turbopack
- 🔷 **TypeScript** - Segurança de tipos completa e melhor experiência de desenvolvimento
- 🎨 **Tailwind CSS 4** - Framework CSS moderno utility-first
- 🧪 **Suíte Completa de Testes** - Jest, React Testing Library, Vitest e Playwright
- 📚 **Storybook** - Desenvolvimento e documentação de componentes
- 🔍 **Qualidade de Código** - ESLint, Prettier, Husky e Lint-staged
- 🚀 **Pipeline CI/CD** - GitHub Actions para testes e deploy automatizados
- 🛠️ **Geração de Código** - Templates Plop para desenvolvimento rápido
- 🐳 **Suporte Docker** - Containerização completa para dev e produção
- 📦 **Stack Moderna** - Versões mais recentes de todas as dependências
- 🏆 **Melhores Práticas** - Estrutura de projeto e convenções padrão da indústria

[English](README.md) | **Português**

## ⚡ Tecnologias Utilizadas

### Framework Base

- **[Next.js 15+](https://nextjs.org/)** - Framework React com App Router, Turbopack e otimizações avançadas
- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática

### Estilização

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Ferramenta para transformação de CSS

### Testes

- **[Jest](https://jestjs.io/)** - Framework de testes JavaScript
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Utilitários para testar componentes React
- **[Vitest](https://vitest.dev/)** - Test runner rápido
- **[Playwright](https://playwright.dev/)** - Framework para testes end-to-end

### Documentação

- **[Storybook](https://storybook.js.org/)** - Ferramenta para desenvolvimento e documentação de componentes

### Qualidade de Código

- **[ESLint](https://eslint.org/)** - Linter para identificar problemas no código
- **[Prettier](https://prettier.io/)** - Formatador de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks para automação
- **[Lint-staged](https://github.com/okonet/lint-staged)** - Executar linters em arquivos staged

### Geração de Código

- **[Plop](https://plopjs.com/)** - Gerador de código baseado em templates

### CI/CD

- **[GitHub Actions](https://docs.github.com/en/actions)** - Pipeline de integração e deploy contínuo

## 🛠️ Estrutura do Projeto

```
k3t-nextjs-boilerplate/
├── .github/
│   ├── workflows/
│   │   └── ci.yml              # Pipeline CI/CD
│   └── copilot-instructions.md # Instruções para IA
├── generators/
│   ├── templates/              # Templates Plop
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
│           ├── stories.tsx   # Stories do Storybook
│           └── test.tsx      # Testes
├── jest.config.js            # Configuração Jest
├── vitest.config.ts          # Configuração Vitest
└── package.json              # Dependências e scripts
```

## 🚀 Como Usar Este Boilerplate

### 1. Criar um Novo Projeto

Use o comando `create-next-app` com este boilerplate como exemplo:

#### Versão Mais Recente (Recomendado)

```bash
npx create-next-app@latest meu-novo-projeto --example https://github.com/kode3tech/k3t-nextjs-boilerplate
cd meu-novo-projeto
```

#### Versão Específica

```bash
# Usando tag de versão (ex: v1.2.0)
npx create-next-app@latest meu-novo-projeto --example https://github.com/kode3tech/k3t-nextjs-boilerplate/tree/v1.2.0

# Usando commit específico
npx create-next-app@latest meu-novo-projeto --example https://github.com/kode3tech/k3t-nextjs-boilerplate/tree/9e596e7

# Usando branch específica
npx create-next-app@latest meu-novo-projeto --example https://github.com/kode3tech/k3t-nextjs-boilerplate/tree/main
```

### 2. Instalar Dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configurar o Projeto

1. **Atualizar `package.json`**:

   ```json
   {
     "name": "meu-novo-projeto",
     "version": "0.1.0",
     "description": "Descrição do seu projeto"
   }
   ```

2. **Inicializar Git (se necessário)**:

   ```bash
   git init
   git add .
   git commit -m "feat: configuração inicial do projeto"
   ```

3. **Personalizar o conteúdo**:
   - Edite `src/app/page.tsx` para sua página inicial
   - Atualize `src/app/layout.tsx` com os metadados do seu projeto
   - Substitua o logo em `public/logo.svg`

## 📋 Scripts Disponíveis

| Script                    | Descrição                                         |
| ------------------------- | ------------------------------------------------- |
| `npm run dev`             | Iniciar servidor de desenvolvimento com Turbopack |
| `npm run build`           | Criar build de produção                           |
| `npm run start`           | Iniciar servidor de produção                      |
| `npm run lint`            | Executar ESLint                                   |
| `npm run test`            | Executar testes com Jest                          |
| `npm run test:watch`      | Executar testes em modo watch                     |
| `npm run test:ci`         | Executar testes para CI                           |
| `npm run gen:component`   | Gerar novo componente com template                |
| `npm run storybook`       | Iniciar Storybook                                 |
| `npm run build-storybook` | Build do Storybook                                |

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
npm run test              # Executar todos os testes
npm run test:watch        # Modo watch
npm run test:ci          # Para CI/CD
```

### Testes E2E (Configuração Manual)

```bash
npx playwright install    # Instalar browsers
npx playwright test       # Executar testes E2E
```

## 📚 Storybook

Desenvolva e documente componentes de forma isolada:

```bash
npm run storybook         # Iniciar em http://localhost:6006
npm run build-storybook   # Build para produção
```

## 🔧 Configuração da IDE

### VS Code

Extensões recomendadas:

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### Configuração EditorConfig

O projeto inclui `.editorconfig` para consistência entre diferentes editores.

## 🐳 Suporte Docker

O boilerplate inclui suporte Docker completo com builds multi-stage otimizados para ambientes de desenvolvimento e produção.

### Início Rápido com Docker

Usando o script de conveniência incluído:

```bash
# Build da imagem de produção
./docker.sh build

# Executar container de produção
./docker.sh run

# Build e execução do container de desenvolvimento
./docker.sh build-dev
./docker.sh run-dev

# Usando docker-compose
./docker.sh compose-up

# Ver logs
./docker.sh logs

# Parar containers
./docker.sh stop

# Limpeza
./docker.sh clean
```

### Comandos Docker Manuais

```bash
# Build da imagem de produção
docker build -t k3t-nextjs-boilerplate .

# Executar container de produção
docker run -d -p 3000:3000 --name k3t-nextjs-app k3t-nextjs-boilerplate

# Build da imagem de desenvolvimento
docker build -f Dockerfile.dev -t k3t-nextjs-boilerplate:dev .

# Executar container de desenvolvimento com hot reload
docker run -d -p 3001:3000 -v $(pwd):/app -v /app/node_modules --name k3t-nextjs-dev k3t-nextjs-boilerplate:dev
```

### Docker Compose

```bash
# Ambiente de produção
docker-compose up -d

# Ambiente de desenvolvimento
docker-compose --profile dev up -d
```

### Recursos Docker

- **Builds multi-stage** - Tamanho de imagem otimizado (~100MB na imagem final)
- **Usuário não-root** - Segurança aprimorada
- **Suporte desenvolvimento** - Hot reload com montagem de volume
- **Pronto para produção** - Output standalone do Next.js
- **Dependências mínimas** - Apenas arquivos de produção na imagem final

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify**: Suporte nativo ao Next.js
- **AWS Amplify**: Deploy com CI/CD integrado
- **Docker**: Dockerfile incluído para containerização

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📋 Convenções

### Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` para novas funcionalidades
- `fix:` para correções de bugs
- `docs:` para documentação
- `style:` para formatação
- `refactor:` para refatoração
- `test:` para testes

### Código

- Use TypeScript para todos os arquivos
- Componentes em PascalCase
- Arquivos de configuração em kebab-case
- Use Prettier para formatação automática

## 🎯 Para Quem é Este Boilerplate?

- ✅ Desenvolvedores que querem começar projetos Next.js rapidamente
- ✅ Times que precisam de configurações padronizadas e testadas
- ✅ Projetos que exigem alta qualidade de código desde o início
- ✅ Aplicações que precisam de testes automatizados
- ✅ Desenvolvedores que valorizam developer experience
- ✅ Projetos que precisam de containerização Docker

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🏢 Sobre a Kode3 Tech

Transformamos ideias em soluções eficientes e inovadoras.

---

⭐ Se este boilerplate foi útil, considere dar uma estrela ao repositório!
