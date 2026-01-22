import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight">vercel-stack</h1>
        <p className="mx-auto max-w-md text-lg text-muted-foreground">
          A Full-Stack Starter optimized for Coding Agents. Built with Next.js 15, Supabase, and
          Vercel AI SDK.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
