"use client";
import { useState, useRef, useEffect } from "react";
import { FaWindowMinimize } from "react-icons/fa";
import gsap from "gsap";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function MessengerChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("chat-session-id");
    if (stored) {
      setSessionId(stored);
    } else {
      const newId = `session-${Date.now()}`;
      localStorage.setItem("chat-session-id", newId);
      setSessionId(newId);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        chatBoxRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !sessionId) return;

    const userMessage: ChatMessage = { role: "user", content: message };

    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, sessionId }),
      });

      const data = await res.json();

      const reply = data.response?.output || "No message received.";

      setChat((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("API Error:", err);
      setChat((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg text-sm"
          onClick={() => setIsOpen(true)}
        >
          💬 Chat with Nikolaos
        </button>
      )}

      {isOpen && (
        <div
          ref={chatBoxRef}
          className="fixed bottom-4 right-4 w-[350px] max-h-[500px] text-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50"
        >
          <div className="bg-[#0084ff] px-4 py-3 text-sm font-semibold flex justify-between">
            <span>Nikolaos Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-300 hover:text-white"
            >
              <FaWindowMinimize size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 bg-black py-2 space-y-3">
            {chat.length === 0 && (
              <div className="text-center text-sm text-gray-300">
                👋 Try me! Ask anything about Nikolaos Chatzinikolaou.
              </div>
            )}
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 text-sm rounded-2xl whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-[#0084ff] text-white rounded-br-none"
                      : "bg-[#3e4042] text-white rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#3e4042] px-4 py-2 text-sm rounded-2xl rounded-bl-none flex gap-1 animate-pulse">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce delay-100">•</span>
                  <span className="animate-bounce delay-200">•</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#0084ff] px-3 py-2 flex gap-2 items-center"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow p-2 rounded-full bg-black text-sm text-white placeholder:text-gray-300 outline-none border-none"
              placeholder="Write a message..."
            />
            <button
              type="submit"
              disabled={loading}
              className="text-sm text-white font-semibold disabled:opacity-50"
            >
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
