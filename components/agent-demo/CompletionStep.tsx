import React from "react";
import { CheckCircle } from "lucide-react";

interface CompletionStepProps {
  restartDemo: () => void;
}

const CompletionStep = ({ restartDemo }: CompletionStepProps) => {
  return (
    <div className="glass p-6 rounded-lg h-[300px] flex flex-col justify-center items-center step-4-completion">
      <div className="bg-aqua-500/20 rounded-full p-6 mb-4">
        <CheckCircle className="text-aqua-500 h-12 w-12" />
      </div>
      <h4 className="text-lg font-medium text-white mb-2">
        Task Completed Successfully
      </h4>
      <p className="text-sm text-white/70 text-center max-w-xs">
        The customer successfully updated their billing information with AI
        agent guidance.
      </p>
      <div className="mt-5 flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
        <span className="text-xs text-white/70">
          Customer satisfaction rating: 98%
        </span>
      </div>
      <button
        onClick={restartDemo}
        className="mt-6 bg-aqua-500 hover:bg-aqua-400 text-navy-900 px-5 py-2 rounded-md font-medium transition-colors"
      >
        Restart Demo
      </button>
    </div>
  );
};

export default CompletionStep;
