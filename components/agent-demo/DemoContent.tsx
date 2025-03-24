import React from "react";
import UserRequestStep from "./UserRequestStep";
import ResponseStep from "./ResponseStep";
import CompletionStep from "./CompletionStep";
import ProcessingStep from "./ProcessingStep";

interface DemoContentProps {
  activeStep: number;
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  setActiveStep: (step: number) => void;
}

const DemoContent: React.FC<DemoContentProps> = ({
  activeStep,
  inputMessage,
  setInputMessage,
  handleSendMessage,
  setActiveStep,
}) => {
  const restartDemo = () => setActiveStep(0);

  switch (activeStep) {
    case 0:
      return (
        <UserRequestStep
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      );
    case 1:
      return <ProcessingStep />;
    case 2:
      return <ResponseStep />;
    case 3:
      return <CompletionStep restartDemo={restartDemo} />;
    default:
      return null;
  }
};

export default DemoContent;
