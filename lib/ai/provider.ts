import { createAnthropic } from "@ai-sdk/anthropic";

export const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Default model for chat
export const defaultModel = anthropic("claude-sonnet-4-20250514");

// Model options
export const models = {
  "claude-sonnet": anthropic("claude-sonnet-4-20250514"),
  "claude-opus": anthropic("claude-opus-4-20250514"),
  "claude-haiku": anthropic("claude-3-5-haiku-20241022"),
} as const;

export type ModelId = keyof typeof models;
