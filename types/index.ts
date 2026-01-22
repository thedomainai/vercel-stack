// Re-export database types
export type { Message, NewMessage, NewUser, User } from "@/lib/db/schema";

// Re-export schema types
export type {
  CreateMessageSchema,
  CreateUserSchema,
  MessageRole,
  MessageSchema,
  UpdateUserSchema,
  UserSchema,
} from "@/schemas";
