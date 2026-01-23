# vercel-stack

A Full-Stack Starter Template optimized for Coding Agents (Claude Code). Build production-ready web applications with AI assistance at maximum speed.

## Features

- **Next.js 15** - App Router, Server Components, Server Actions
- **Supabase** - PostgreSQL, Authentication, Row Level Security
- **Vercel AI SDK** - Claude integration for AI-powered features
- **Type Safety** - TypeScript, Drizzle ORM, Zod validation
- **Modern UI** - Tailwind CSS, shadcn/ui components
- **Quality Tools** - Biome (linting), Vitest, Playwright
- **Production Ready** - Sentry error tracking, CI/CD workflows

## Quick Start

### Use as Template

```bash
# Create new project from template
gh repo create my-app --template thedomainai/vercel-stack --clone --public
cd my-app

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your credentials

# Start development
npm run dev
```

### Or Clone Directly

```bash
git clone https://github.com/thedomainai/vercel-stack.git my-app
cd my-app
rm -rf .git && git init
npm install
```

## Environment Variables

Create `.env.local` with the following:

```bash
# Supabase (required)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-database-url

# Anthropic (for AI features)
ANTHROPIC_API_KEY=your-anthropic-api-key

# Sentry (optional)
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

## Project Structure

```
vercel-stack/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes (login, signup)
│   ├── (main)/            # Protected routes
│   └── api/               # API routes
├── features/              # Feature modules
│   ├── auth/              # Authentication
│   ├── chat/              # AI Chat
│   └── dashboard/         # Dashboard
├── components/ui/         # shadcn/ui components
├── lib/                   # Utilities
│   ├── ai/               # AI SDK setup
│   ├── db/               # Drizzle schema
│   └── supabase/         # Supabase clients
├── docs/                  # Product documentation
│   ├── 1_strategy/       # Vision, personas
│   ├── 2_requirements/   # User stories, features
│   ├── 3_design/         # Design system
│   └── 5_operations/     # Roadmap
└── tests/                 # Test files
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Build for production |
| `npm run lint` | Run Biome linter |
| `npm run typecheck` | Run TypeScript check |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Drizzle Studio |

## Documentation

| Document | Purpose |
|----------|---------|
| [CLAUDE.md](./CLAUDE.md) | Coding agent guide & conventions |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Technical architecture |
| [docs/1_strategy/VISION.md](./docs/1_strategy/VISION.md) | Product vision template |
| [docs/2_requirements/USER_STORIES.md](./docs/2_requirements/USER_STORIES.md) | User stories template |
| [docs/3_design/DESIGN_SYSTEM.md](./docs/3_design/DESIGN_SYSTEM.md) | Design system guide |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables
4. Deploy

### Supabase Setup

1. Create project at [supabase.com](https://supabase.com)
2. Copy connection credentials to `.env.local`
3. Run `npm run db:push` to create tables
4. Configure Auth URL settings in Supabase Dashboard

## For Coding Agents

This template is optimized for AI-assisted development:

1. **CLAUDE.md** - Contains coding conventions and patterns
2. **docs/** - Product documentation for context
3. **Feature-based structure** - Easy to navigate and extend
4. **Type safety** - Reduces errors and improves suggestions

### Example Prompt

```
Using vercel-stack, create a task management feature with:
- Task CRUD operations
- Drag and drop sorting
- Team member assignment
- Due date tracking
```

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 15](https://nextjs.org) |
| Database | [Supabase](https://supabase.com) (PostgreSQL) |
| ORM | [Drizzle](https://orm.drizzle.team) |
| Auth | [Supabase Auth](https://supabase.com/auth) |
| AI | [Vercel AI SDK](https://sdk.vercel.ai) |
| Styling | [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Testing | [Vitest](https://vitest.dev) + [Playwright](https://playwright.dev) |
| Linting | [Biome](https://biomejs.dev) |

## License

MIT

---

Built with Claude Code
