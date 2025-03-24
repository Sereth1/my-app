import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Minimize } from "lucide-react";
import gsap from "gsap";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "👋 Hello! I'm your AI assistant. How can I help you today? Ask me anything about AI agents for your business.",
  },
];

const botResponses: Record<string, string> = {
  hello: "Hi there! How can I help your business today?",
  help: "I can help you automate customer service, streamline operations, and reduce costs. What specific area of your business are you looking to improve?",
  cost: "Our AI agents can reduce operational costs by up to 30%. They work 24/7 without breaks, benefits, or overtime, handling routine queries so your team can focus on high-value tasks.",
  efficiency:
    "By implementing AI agents, businesses typically see a 40% increase in operational efficiency. Routine tasks are automated, allowing your human employees to focus on strategic initiatives.",
  example:
    "One of our retail clients implemented AI agents for customer service and saw 85% of routine queries handled without human intervention, reducing response times from hours to seconds.",
  integration:
    "Our AI agents integrate seamlessly with your existing systems like CRM, ERP, and customer service platforms. Implementation usually takes just 2-4 weeks.",
  customization:
    "Yes, our AI agents are fully customizable to match your brand voice and handle industry-specific queries. We train them on your documentation and knowledge base.",
  pricing:
    "Our pricing starts at $499/month for basic implementation. I'd be happy to connect you with our sales team for a customized quote based on your specific needs.",
  compare:
    "Unlike rule-based chatbots, our AI agents use advanced language models to understand context, learn from interactions, and handle complex queries with human-like understanding.",
};

const MessengerChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>(initialMessages);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        chatBoxRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const simulateResponse = (userMessage: string): string => {
    // Check for keyword matches in the bot responses
    const lowercaseMessage = userMessage.toLowerCase();

    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowercaseMessage.includes(keyword)) {
        return response;
      }
    }

    // Default response if no keywords match
    return "I understand you're interested in AI agents. They can automate customer service, improve efficiency, and reduce costs. Would you like to know more about a specific benefit?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: message };
    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botReply = simulateResponse(userMessage.content);

      setChat((prev) => [...prev, { role: "assistant", content: botReply }]);

      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 bg-aqua-500 hover:bg-aqua-500/90 text-navy-900 p-4 rounded-full shadow-glow text-sm z-50 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(100,255,218,0.6)]"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div
          ref={chatBoxRef}
          className="fixed bottom-6 right-6 w-[350px] h-[500px] text-white rounded-xl glass shadow-glow flex flex-col overflow-hidden z-50 border border-white/10"
        >
          <div className="bg-navy-800 border-b border-white/10 px-4 py-3 text-sm font-semibold flex justify-between items-center">
            <span className="text-aqua-500">AI Agent Demo</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Minimize chat"
              >
                <Minimize size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-navy-900/90 space-y-4">
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm rounded-xl whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-aqua-500 text-navy-900 rounded-br-none font-medium"
                      : "glass text-white rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="glass px-4 py-3 text-sm rounded-xl rounded-bl-none flex gap-2 items-center">
                  <span className="w-2 h-2 bg-aqua-500 rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-aqua-500 rounded-full animate-pulse delay-150"></span>
                  <span className="w-2 h-2 bg-aqua-500 rounded-full animate-pulse delay-300"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-white/10 bg-navy-800 flex gap-2 items-center"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow p-3 rounded-md bg-navy-700 text-sm text-white placeholder:text-white/50 outline-none border border-white/10 focus:border-aqua-500/50 transition-colors"
              placeholder="Ask about AI agents..."
            />
            <button
              type="submit"
              disabled={loading}
              className="p-3 rounded-md text-navy-900 bg-aqua-500 hover:bg-aqua-500/90 transition-colors disabled:opacity-50 flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default MessengerChat;
