import React from "react";

const ProcessingStep = () => {
  return (
    <div className="glass p-6 rounded-lg h-[300px] flex flex-col justify-center items-center step-2-processing">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 bg-aqua-500/20 rounded-full animate-ping"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-aqua-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
      <div className="text-center space-y-2">
        <h4 className="text-lg font-medium text-white">Processing Request</h4>
        <p className="text-sm text-white/70">
          Analyzing intent and preparing response...
        </p>
      </div>
    </div>
  );
};

export default ProcessingStep;
