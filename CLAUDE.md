# vercel-stack - Coding Agent Guide

## Project Overview

A Full-Stack Starter optimized for Coding Agents. Built with Next.js 15, Supabase, and Vercel AI SDK.

---

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev

# Run tests
npm run test
npm run test:e2e
```

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Database | Supabase PostgreSQL |
| ORM | Drizzle |
| Auth | Supabase Auth |
| AI | Vercel AI SDK (@ai-sdk/anthropic) |
| Styling | Tailwind CSS + shadcn/ui |
| Testing | Vitest + Playwright |
| Linting | Biome |
| Error Tracking | Sentry |

---

## Directory Structure

```
vercel-stack/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes (login, signup)
│   ├── (main)/            # Protected routes (dashboard, chat)
│   └── api/               # API routes
├── features/              # Feature modules (MAIN DEVELOPMENT AREA)
│   ├── auth/              # Authentication feature
│   ├── chat/              # AI Chat feature
│   └── dashboard/         # Dashboard feature
├── components/            # shadcn/ui components
│   └── ui/
├── lib/                   # Utilities and configurations
│   ├── ai/               # AI SDK setup
│   ├── db/               # Drizzle schema and client
│   └── supabase/         # Supabase clients
├── tests/                 # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── .github/workflows/     # CI/CD
```

---

## Coding Conventions

### File Naming
- **Components**: PascalCase (`LoginForm.tsx`)
- **Hooks**: camelCase with `use` prefix (`useAuth.ts`)
- **Utils**: camelCase (`formatDate.ts`)
- **Actions**: `actions.ts` in feature directories

### Import Order
```typescript
// 1. React/Next.js
import { useState } from "react";
import Link from "next/link";

// 2. External libraries
import { useChat } from "@ai-sdk/react";

// 3. Internal - UI components
import { Button } from "@/components/ui/button";

// 4. Internal - Features
import { LoginForm } from "@/features/auth";

// 5. Internal - Lib
import { createClient } from "@/lib/supabase/server";

// 6. Types
import type { User } from "@/lib/db/schema";
```

### Component Structure
```typescript
// 1. "use client" directive (if needed)
"use client";

// 2. Imports (ordered as above)

// 3. Types/Interfaces
interface Props {
  title: string;
}

// 4. Component
export function MyComponent({ title }: Props) {
  // Hooks first
  const [state, setState] = useState();

  // Handlers
  function handleClick() {}

  // Render
  return <div>{title}</div>;
}
```

---

## Common Patterns

### Server Action (Mutation)
```typescript
// features/[feature]/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createItem(formData: FormData) {
  const supabase = await createClient();

  const data = {
    name: formData.get("name") as string,
  };

  const { error } = await supabase.from("items").insert(data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/items");
  return { success: true };
}
```

### Data Fetching (Server Component)
```typescript
// app/(main)/items/page.tsx
import { db } from "@/lib/db";
import { items } from "@/lib/db/schema";

export default async function ItemsPage() {
  const allItems = await db.select().from(items);

  return (
    <ul>
      {allItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

### Client Component with Form
```typescript
// features/[feature]/components/item-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItem } from "../actions";

export function ItemForm() {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await createItem(formData);
    setIsPending(false);

    if (result.error) {
      // Handle error
    }
  }

  return (
    <form action={handleSubmit}>
      <Input name="name" required />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create"}
      </Button>
    </form>
  );
}
```

---

## Adding New Features

1. **Create feature directory**:
   ```
   features/[feature-name]/
   ├── components/
   │   ├── index.ts
   │   └── [ComponentName].tsx
   ├── hooks/
   │   └── use[HookName].ts
   ├── actions.ts
   └── index.ts
   ```

2. **Export from index.ts**:
   ```typescript
   // features/[feature-name]/index.ts
   export * from "./actions";
   export * from "./components";
   ```

3. **Create route in app/**:
   ```
   app/(main)/[feature-name]/
   └── page.tsx
   ```

---

## Database

### Schema Location
`lib/db/schema.ts`

### Add New Table
```typescript
// lib/db/schema.ts
export const newTable = pgTable("new_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type NewTable = typeof newTable.$inferSelect;
export type InsertNewTable = typeof newTable.$inferInsert;
```

### Generate Migration
```bash
npm run db:generate
```

### Apply Migration
```bash
npm run db:push
```

---

## Testing

### Unit Test
```typescript
// tests/unit/example.test.ts
import { describe, expect, it } from "vitest";

describe("Feature", () => {
  it("should work", () => {
    expect(true).toBe(true);
  });
});
```

### E2E Test
```typescript
// tests/e2e/feature.spec.ts
import { expect, test } from "@playwright/test";

test("should navigate", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/vercel-stack/);
});
```

### Run Tests
```bash
npm run test          # Unit tests (watch mode)
npm run test -- --run # Unit tests (single run)
npm run test:e2e      # E2E tests
```

---

## Environment Variables

```bash
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-database-url

# Anthropic (for AI features)
ANTHROPIC_API_KEY=your-anthropic-api-key

# Sentry (optional)
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
SENTRY_ORG=your-sentry-org
SENTRY_PROJECT=your-sentry-project
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run Biome linter |
| `npm run check` | Run all Biome checks |
| `npm run typecheck` | Run TypeScript check |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run db:generate` | Generate DB migration |
| `npm run db:push` | Apply DB migration |
| `npm run db:studio` | Open Drizzle Studio |

---

## Git Workflow

### Branch Naming
```
<type>/<issue-number>-<short-description>
```
Example: `feat/1-add-user-profile`

### Commit Format
```
<type>(<scope>): <description> (#<issue>)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```
Example: `feat(auth): add password reset (#42)`

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`
