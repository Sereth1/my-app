/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MessageSquare, Send, User } from "lucide-react";

const ResponseStep = () => {
  return (
    <div className="glass p-6 rounded-lg h-[300px] relative flex flex-col step-3-response">
      <div className="flex-1 overflow-y-auto space-y-4">
        <div className="flex justify-end mb-4">
          <div className="bg-aqua-500 text-navy-900 px-4 py-2 rounded-xl rounded-br-none max-w-[80%] flex items-center gap-2">
            <span>I need help updating my billing information</span>
            <div className="bg-navy-900/20 p-1 rounded-full">
              <User size={16} className="text-navy-900" />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-navy-800 text-white px-4 py-2 rounded-xl rounded-bl-none max-w-[80%]">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-aqua-500/20 p-1 rounded-full">
                <MessageSquare size={16} className="text-aqua-500" />
              </div>
              <span className="font-medium text-aqua-500">AI Assistant</span>
            </div>
            I'd be happy to help you update your billing information. You can do
            this by:
            <ol className="list-decimal ml-5 mt-2 space-y-1">
              <li>Going to Account Settings</li>
              <li>Selecting Payment Methods</li>
              <li>Clicking "Edit" or "Add New&quot;</li>
            </ol>
            Would you like me to guide you through each step?
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <input
            disabled
            className="bg-navy-800 border border-white/10 rounded-md px-3 py-2 h-10 w-full text-white/50"
            placeholder="Type your reply..."
          />
          <button
            disabled
            className="bg-navy-700 text-white/50 h-10 w-10 flex items-center justify-center rounded-md cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponseStep;
