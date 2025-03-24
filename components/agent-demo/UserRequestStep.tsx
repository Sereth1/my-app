import React from "react";
import { MessageSquare, Send } from "lucide-react";

interface UserRequestStepProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
}

const UserRequestStep = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
}: UserRequestStepProps) => {
  return (
    <div className="glass p-6 rounded-lg h-[300px] relative flex flex-col step-1-message">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        <div className="flex justify-start">
          <div className="bg-navy-800 text-white px-4 py-2 rounded-xl rounded-bl-none max-w-[80%] flex items-center gap-2">
            <div className="bg-aqua-500/20 p-1 rounded-full">
              <MessageSquare size={16} className="text-aqua-500" />
            </div>
            <span>How can I help you today?</span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSendMessage} className="mt-auto">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="bg-navy-800 border border-white/10 rounded-md px-3 py-2 h-10 w-full text-white focus:outline-none focus:ring-1 focus:ring-aqua-500"
            placeholder="I need help updating my billing information..."
          />
          <button
            type="submit"
            className="bg-aqua-500 hover:bg-aqua-500/90 text-navy-900 h-10 w-10 flex items-center justify-center rounded-md"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRequestStep;
