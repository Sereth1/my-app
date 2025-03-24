import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { demoSteps } from "./agent-demo/DemoStepList";
import DemoStepList from "./agent-demo/DemoStepList";
import DemoContent from "./agent-demo/DemoContent";
import AgentDemoHeader from "./agent-demo/AgentDemoHeader";

const AgentDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [inputMessage, setInputMessage] = useState("");
  const stepsRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.fromTo(
      demoRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
    );

    timelineRef.current = gsap.timeline({ paused: true });
    demoSteps.forEach((step) => {
      if (step.animation) {
        step.animation(timelineRef.current!);
      }
    });
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.seek(0);
      timelineRef.current.play();
    }

    if (stepsRef.current) {
      gsap.to(".step-indicator", {
        backgroundColor: "rgba(100, 255, 218, 0.1)",
        borderColor: "rgba(100, 255, 218, 0.3)",
        duration: 0.3,
      });

      gsap.to(`.step-indicator-${activeStep}`, {
        backgroundColor: "rgba(100, 255, 218, 0.2)",
        borderColor: "rgba(100, 255, 218, 1)",
        duration: 0.3,
      });
    }
  }, [activeStep]);

  const nextStep = () => {
    setActiveStep((prev) => (prev < demoSteps.length - 1 ? prev + 1 : 0));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setActiveStep(1);

      setTimeout(() => {
        setActiveStep(2);

        setTimeout(() => {
          setActiveStep(3);
        }, 3000);
      }, 2000);

      setInputMessage("");
    }
  };

  return (
    <div className="py-24 container-custom" ref={demoRef}>
      <AgentDemoHeader />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <DemoStepList
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          nextStep={nextStep}
          stepsRef={stepsRef}
        />

        <div className="order-1 md:order-2">
          <DemoContent
            activeStep={activeStep}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleSendMessage={handleSendMessage}
            setActiveStep={setActiveStep}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentDemo;
