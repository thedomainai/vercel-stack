import { ChatInterface } from "@/features/chat";

export default function ChatPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8 text-3xl font-bold">AI Chat</h1>
      <ChatInterface />
    </div>
  );
}
