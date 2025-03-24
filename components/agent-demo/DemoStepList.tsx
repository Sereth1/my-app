import React from "react";
import {
  MessageSquare,
  Activity,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";

export type DemoStep = {
  title: string;
  description: string;
  icon: React.ReactNode;
  animation: (timeline: gsap.core.Timeline) => void;
};

export const demoSteps: DemoStep[] = [
  {
    title: "User Request",
    description: "Customer sends a query through your website or app.",
    icon: <MessageSquare className="text-aqua-500" />,
    animation: (timeline: gsap.core.Timeline) => {
      timeline.fromTo(
        ".step-1-message",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    },
  },
  {
    title: "AI Processing",
    description: "Our agent analyzes the request using advanced NLP.",
    icon: <Activity className="text-aqua-500" />,
    animation: (timeline: gsap.core.Timeline) => {
      timeline.fromTo(
        ".step-2-processing",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
    },
  },
  {
    title: "Instant Response",
    description: "The agent delivers an accurate, helpful response in seconds.",
    icon: <Zap className="text-aqua-500" />,
    animation: (timeline: gsap.core.Timeline) => {
      timeline.fromTo(
        ".step-3-response",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    },
  },
  {
    title: "Task Resolution",
    description: "Complex issues are resolved without human intervention.",
    icon: <CheckCircle className="text-aqua-500" />,
    animation: (timeline: gsap.core.Timeline) => {
      timeline.fromTo(
        ".step-4-completion",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
    },
  },
];

interface DemoStepListProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
  nextStep: () => void;
  stepsRef: React.RefObject<HTMLDivElement>;
}

const DemoStepList = ({
  activeStep,
  setActiveStep,
  nextStep,
  stepsRef,
}: DemoStepListProps) => {
  return (
    <div className="order-2 md:order-1">
      <div ref={stepsRef} className="space-y-6">
        {demoSteps.map((step, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-4 p-5 rounded-lg glass transition-all duration-300 cursor-pointer hover:bg-white/5 step-indicator step-indicator-${idx} ${
              activeStep === idx
                ? "border-aqua-500 bg-white/5"
                : "border-white/10"
            }`}
            onClick={() => setActiveStep(idx)}
          >
            <div className="bg-navy-800 rounded-full p-2 shrink-0">
              {step.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-white/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={nextStep}
          className="bg-aqua-500 hover:bg-aqua-400 text-navy-900 px-5 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
        >
          Next Step <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default DemoStepList;
