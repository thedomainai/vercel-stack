import { streamText } from "ai";

import { defaultModel } from "@/lib/ai/provider";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: defaultModel,
    messages,
    system: "You are a helpful assistant.",
  });

  return result.toTextStreamResponse();
}
