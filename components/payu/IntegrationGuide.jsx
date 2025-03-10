// components/payu/IntegrationGuide.jsx
"use client";

import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { payuTheme } from "@/lib/theme";
import { payuConfig } from "@/lib/payu/config";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function IntegrationGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState("java");

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={payuTheme}>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar 
          activeStep={activeStep} 
          handleStepChange={handleStepChange} 
          integrationSteps={payuConfig.integrationSteps} 
        />
        <MainContent 
          activeStep={activeStep}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
          codeSamples={payuConfig.codeSamples}
          languageOptions={payuConfig.languageOptions}
        />
      </div>
    </ThemeProvider>
  );
}