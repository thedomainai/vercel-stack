import { z } from "zod";

export const messageRoleSchema = z.enum(["user", "assistant"]);

export const messageSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  role: messageRoleSchema,
  content: z.string(),
  createdAt: z.coerce.date(),
});

export const createMessageSchema = messageSchema.omit({
  id: true,
  createdAt: true,
});

export type MessageRole = z.infer<typeof messageRoleSchema>;
export type MessageSchema = z.infer<typeof messageSchema>;
export type CreateMessageSchema = z.infer<typeof createMessageSchema>;
