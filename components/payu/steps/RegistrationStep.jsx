// components/payu/steps/RegistrationStep.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExternalLink, Key, Copy, AlertCircle } from "lucide-react";

export default function RegistrationStep({ handleNext }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: Get Your KEY and SALT</h2>
      
      <Alert className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          You need key and salt before proceeding with integration.
        </AlertDescription>
      </Alert>
      
      <div className="space-y-4 mb-6">
        <div className="rounded-md border p-4">
          <h3 className="font-medium mb-2">How to get your Test Merchant Key and Salt:</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Register for a PayU merchant account if you haven't already
            </li>
            <li>
              Log in to <a href="https://onboarding.payu.in/app/account/signin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center">
                PayU Dashboard <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </li>
            <li>
              Switch to <strong>Test Mode</strong> from the toggle on the menu bar for testing
            </li>
            <li>
              Select <strong>Developer</strong> from the menu and go to the <strong>API Details</strong> tab
            </li>
            <li>
              Copy your <strong>Key</strong>, and <strong>Salt</strong>
            </li>
          </ol>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> API credentials won't be visible if you haven't completed onboarding, 
            your website hasn't been verified by PayU, or if you don't have a website. Website verification takes 1-2 days.
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-6">
        <Button 
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          I have my credentials, continue
        </Button>
      </div>
    </div>
  );
}