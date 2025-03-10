import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Copy, CheckCircle } from "lucide-react";
import CodeDisplay from "../CodeDisplay";

export default function IntegrateAPIStep({ handleBack, handleNext, codeSample }) {
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
          <CardTitle>Integrate Payment Initiation API</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <p className="mb-4">
                Add the following code to your backend to initialize a payment transaction. 
                This will generate a transaction ID and token that you'll need for the frontend.
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
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> Make sure to replace the placeholders with your actual 
                  data. You'll need to customize the transaction amount, currency, and order details.
                </p>
              </div>
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
              
              <Button
                onClick={handleNext}
                className="gap-2"
              >
                Continue
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}