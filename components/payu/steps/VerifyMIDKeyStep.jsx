import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function VerifyMIDKeyStep({ handleBack, handleNext }) {
  const [merchantId, setMerchantId] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (!merchantId || !apiKey) {
      setError("Both Merchant ID and API Key are required");
      return;
    }

    setError("");
    setIsVerifying(true);
    
    // Simulate API verification
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 1500);
  };

  return (
    <div className="py-4">
      <Card>
        <CardHeader>
          <CardTitle>Verify Your Merchant Credentials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="merchant-id">Merchant ID</Label>
                <Input
                  id="merchant-id"
                  placeholder="Enter your Merchant ID"
                  value={merchantId}
                  onChange={(e) => setMerchantId(e.target.value)}
                  disabled={isVerified}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Enter your API Key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  disabled={isVerified}
                />
              </div>

              {isVerified ? (
                <div className="flex items-center text-green-600 gap-2 mt-2">
                  <CheckCircle size={20} />
                  <span>Credentials verified successfully!</span>
                </div>
              ) : (
                <Button 
                  onClick={handleVerify} 
                  disabled={isVerifying}
                  className="mt-2"
                >
                  {isVerifying ? "Verifying..." : "Verify Credentials"}
                </Button>
              )}
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
                disabled={!isVerified}
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