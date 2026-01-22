# vercel-stack Architecture

## Overview

**Coding Agent (Claude Code) が最速・高品質で開発できる Full-Stack Starter**

- Vercel + Supabase のモダンスタック
- Vercel AI SDK で AI 機能対応
- 本番運用可能（テスト・CI/CD・監視含む）

---

## Tech Stack

| Category | Technology | Notes |
|----------|------------|-------|
| **Hosting** | Vercel | - |
| **Framework** | Next.js 15 (App Router) | RSC, Server Actions |
| **AI** | Vercel AI SDK v5 | `@ai-sdk/anthropic` |
| **DB** | Supabase PostgreSQL | - |
| **ORM** | Drizzle | Type-safe, migrations |
| **Auth** | Supabase Auth | RLS support |
| **Storage** | Supabase Storage | File management |
| **Styling** | Tailwind CSS + shadcn/ui | - |
| **Validation** | Zod | Schema sharing |
| **Unit Test** | Vitest + Testing Library | - |
| **E2E Test** | Playwright | - |
| **CI/CD** | GitHub Actions | lint, test, deploy |
| **Error Tracking** | Sentry | - |
| **Rate Limiting** | Upstash Ratelimit | - |
| **Analytics** | Vercel Analytics | - |
| **Lint/Format** | Biome | - |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        Vercel                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │               Next.js 15 (App Router)                 │  │
│  │                                                       │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │  │
│  │  │   Pages     │  │ API Routes  │  │   Server    │   │  │
│  │  │   (RSC)     │  │ /api/chat   │  │   Actions   │   │  │
│  │  └─────────────┘  └──────┬──────┘  └─────────────┘   │  │
│  │                          │                            │  │
│  │  ┌───────────────────────┼────────────────────────┐  │  │
│  │  │    Vercel AI SDK v5   │                        │  │  │
│  │  │    streamText, generateText, tools             │  │  │
│  │  └───────────────────────┼────────────────────────┘  │  │
│  └──────────────────────────┼────────────────────────────┘  │
│                             │                               │
│  ┌──────────────────────────┼────────────────────────────┐  │
│  │  Monitoring & Security   │                            │  │
│  │  - Sentry (errors)       │                            │  │
│  │  - Vercel Analytics      │                            │  │
│  │  - Upstash Ratelimit     │                            │  │
│  └──────────────────────────┼────────────────────────────┘  │
└─────────────────────────────┼───────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   Anthropic   │    │   Supabase    │    │   Supabase    │
│   Claude API  │    │  PostgreSQL   │    │     Auth      │
└───────────────┘    │  + Drizzle    │    │   + Storage   │
                     └───────────────┘    └───────────────┘
```

---

## Directory Structure

```
vercel-stack/
├── CLAUDE.md                     # Coding Agent instructions
├── .claude/
│   └── rules/
│       ├── git-workflow.md
│       └── coding-standards.md
│
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (main)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── dashboard/page.tsx
│   │   └── chat/page.tsx
│   ├── api/
│   │   └── chat/route.ts
│   ├── layout.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
│
├── features/                     # Feature-based modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── actions.ts
│   ├── chat/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── actions.ts
│   └── dashboard/
│       ├── components/
│       ├── hooks/
│       └── actions.ts
│
├── shared/                       # Shared resources
│   ├── components/
│   │   └── ui/                   # shadcn/ui
│   └── hooks/
│
├── lib/                          # Utilities & configs
│   ├── ai/
│   │   ├── provider.ts
│   │   └── tools/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── db/
│   │   ├── index.ts
│   │   ├── schema.ts
│   │   └── queries/
│   ├── monitoring/
│   │   └── sentry.ts
│   └── ratelimit/
│       └── index.ts
│
├── schemas/                      # Zod schemas (API <-> Client)
│   ├── user.ts
│   ├── chat.ts
│   └── index.ts
│
├── types/
│   └── index.ts
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── supabase/
│   ├── migrations/
│   └── seed.sql
│
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── drizzle.config.ts
├── biome.json
├── vitest.config.ts
├── playwright.config.ts
├── sentry.client.config.ts
├── sentry.server.config.ts
└── .env.example
```

---

## Design Decisions

### Why Feature-based Directory Structure?

- Coding Agent can understand scope easily: "fix auth" → `features/auth/`
- Related files are co-located
- Scales well as features grow

### Why Drizzle over Supabase Client?

- Type-safe queries from schema definition
- Schema is visible in codebase (not just Dashboard)
- Migration management with `drizzle-kit`
- Coding Agent can understand DB structure from `schema.ts`

### Why Supabase over Vercel Postgres?

- Integrated Auth (no separate Auth.js setup)
- Storage included
- Realtime subscriptions available
- Generous free tier

---

## Production Readiness Checklist

### Development
- [x] Framework (Next.js 15)
- [x] Database (Supabase + Drizzle)
- [x] Authentication (Supabase Auth)
- [x] Styling (Tailwind + shadcn/ui)
- [x] Validation (Zod)

### Testing
- [x] Unit tests (Vitest)
- [x] Integration tests (Vitest + Testing Library)
- [x] E2E tests (Playwright)

### CI/CD
- [x] Lint check (Biome)
- [x] Type check (tsc)
- [x] Test automation (GitHub Actions)
- [x] Preview deployments (Vercel)
- [x] Production deployments (Vercel)

### Monitoring & Security
- [x] Error tracking (Sentry)
- [x] Analytics (Vercel Analytics)
- [x] Rate limiting (Upstash)
- [x] Input validation (Zod)
- [x] Auth & RLS (Supabase)

### SEO
- [x] Metadata API
- [x] sitemap.ts
- [x] robots.ts

---

## Next Steps

1. Initialize Next.js project
2. Configure Supabase + Drizzle
3. Set up Biome, Vitest, Playwright
4. Create CLAUDE.md for Coding Agent
5. Implement base features
