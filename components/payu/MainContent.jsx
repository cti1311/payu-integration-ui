// components/payu/MainContent.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ChevronRight, ExternalLink } from "lucide-react";
import { Stepper, Step, StepButton, Box } from "@mui/material";
import CodeDisplay from "./CodeDisplay";
import RegistrationStep from "./steps/RegistrationStep";
import LanguageSelectionStep from "./steps/LanguageSelectionStep";
import IntegrateAPIStep from "./steps/IntegrateAPIStep";
import AddJSCodeStep from "./steps/AddJSCodeStep";

export default function MainContent({
  activeStep,
  activeTab,
  setActiveTab,
  handleNext,
  handleBack,
  handleReset,
  codeSamples,
  languageOptions
}) {
  // Handler for when a step is clicked directly
  const handleStepClick = (step) => {
    // Only allow moving to steps that have been completed or are next
    if (step <= activeStep + 1 && step >= 0) {
      // Logic to directly go to a step
      if (step < activeStep) {
        handleBack(activeStep - step); // Go back multiple steps
      } else if (step > activeStep) {
        handleNext(); // Go forward (only one step at a time for validation)
      }
    }
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Integrate Prebuilt Library - Payment Initiation
            </h1>
            <p className="mt-2 text-gray-600">
              Now that you have designed your payment page, it's time to
              integrate the server side APIs and frontend JS code snippet.
              Follow the steps below.
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4V16M4 10H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Contact Support
          </Button>
        </div>

        {/* Clickable Horizontal Stepper */}
        <div className="mb-8">
          <Stepper activeStep={activeStep} orientation="horizontal">
            <Step completed={activeStep > 0}>
              <StepButton onClick={() => handleStepClick(0)}>
                <div className="text-sm font-medium text-green-700">
                  Get Credentials
                </div>
              </StepButton>
            </Step>
            <Step completed={activeStep > 1}>
              <StepButton onClick={() => handleStepClick(1)} disabled={activeStep < 1}>
                <div className="text-sm font-medium text-green-700">
                  Select Language
                </div>
              </StepButton>
            </Step>
            <Step completed={activeStep > 2}>
              <StepButton onClick={() => handleStepClick(2)} disabled={activeStep < 2}>
                <div className="text-sm font-medium text-gray-700">
                  Integrate API
                </div>
              </StepButton>
            </Step>
            <Step>
              <StepButton onClick={() => handleStepClick(3)} disabled={activeStep < 3}>
                <div className="text-sm font-medium text-gray-700">
                  Add JS Snippet
                </div>
              </StepButton>
            </Step>
          </Stepper>
        </div>

        {/* Step Content Section */}
        <Card className="mt-6">
          <CardContent className="pt-6">
            {activeStep === 0 && (
              <RegistrationStep 
                handleNext={handleNext}
              />
            )}
            
            {activeStep === 1 && (
              <LanguageSelectionStep 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                handleNext={handleNext}
                handleBack={handleBack}
                codeSamples={codeSamples}
                languageOptions={languageOptions}
              />
            )}
            
            {activeStep === 2 && (
              <IntegrateAPIStep 
                handleBack={handleBack}
                handleNext={handleNext}
                codeSample={codeSamples.apiIntegration}
              />
            )}
            
            {activeStep === 3 && (
              <AddJSCodeStep 
                handleBack={handleBack}
                handleReset={handleReset}
                handleNext={handleNext}
                codeSample={codeSamples.frontendSnippet}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}