import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Copy, CheckCircle, ExternalLink } from "lucide-react";
import CodeDisplay from "../CodeDisplay";

export default function AddJSCodeStep({ handleBack, handleReset, handleNext, codeSample }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-4">
      <Card>
        <CardHeader>
          <CardTitle>Add JavaScript Code Snippet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <p className="mb-4">
                Add the following JavaScript code to your payment page. This code initializes the 
                payment form and handles the submission process.
              </p>
              
              <div className="relative">
                <CodeDisplay code={codeSample} />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="absolute top-4 right-4"
                >
                  {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                </Button>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="text-sm text-blue-700">
                  <strong>Tip:</strong> The code above should be placed right before the closing &lt;/body&gt; 
                  tag in your HTML file. Make sure to include the transaction token from your backend API call.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">All Set! What's Next?</h3>
              <ul className="list-disc pl-5 space-y-2 text-green-700">
                <li>Test your integration in the sandbox environment</li>
                <li>Configure webhooks for payment notifications</li>
                <li>Set up your success and failure redirect URLs</li>
              </ul>
              <Button 
                variant="link" 
                className="p-0 h-auto mt-2 text-green-700 flex items-center gap-1"
              >
                View Documentation <ExternalLink size={14} />
              </Button>
            </div>

            <div className="pt-4 flex justify-between">
              <Button
                onClick={handleBack}
                variant="outline"
                className="gap-2"
              >
                <ChevronLeft size={16} />
                Back
              </Button>
              
              <div className="space-x-2">
                <Button
                  variant="outline"
                  onClick={handleReset}
                >
                  Start Over
                </Button>
                
                <Button
                  onClick={handleNext}
                  variant="default"
                >
                  Finish
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}