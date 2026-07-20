import { useState } from "react";
import { Send } from "lucide-react";

import { sendMessage } from "../../services/atlasapi"
import type { ChatMessage } from "../../types/chat";

export default function AtlasPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const text = input;

    setInput("");

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await sendMessage(text);

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Sorry, I couldn't reach the backend.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className="flex h-full flex-col border-l border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 p-5">
        <h2 className="text-xl font-bold text-white">
          Atlas
        </h2>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-5">

        {messages.map((message) => (
          <div
            key={message.id}
            className={`rounded-xl p-3 ${
              message.role === "user"
                ? "ml-auto max-w-[80%] bg-blue-600 text-white"
                : "mr-auto max-w-[80%] bg-slate-800 text-slate-100"
            }`}
          >
            {message.content}
          </div>
        ))}

        {loading && (
          <div className="rounded-xl bg-slate-800 p-3 text-slate-400">
            Atlas is thinking...
          </div>
        )}

      </div>

      <div className="border-t border-slate-800 p-4">

        <div className="flex gap-2">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Ask Atlas..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-4 transition hover:bg-blue-500 disabled:opacity-50"
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </aside>
  );
}