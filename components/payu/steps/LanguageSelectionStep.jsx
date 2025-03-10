// components/payu/steps/LanguageSelectionStep.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";
import { Box } from "@mui/material";
import CodeDisplay from "../CodeDisplay";

export default function LanguageSelectionStep({
  activeTab,
  setActiveTab,
  handleNext,
  codeSamples,
  languageOptions
}) {
  return (
    <Card className="mt-3 border-green-100">
      <CardContent className="p-6">
        <p className="text-gray-700 mb-6">
          Download the files shown in the right panel, as per your
          backend language.
        </p>

        <Tabs
          defaultValue="java"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 mb-6">
            {languageOptions.map(lang => (
              <TabsTrigger key={lang} value={lang}>
                {lang === "node" ? "Node.js" : lang.charAt(0).toUpperCase() + lang.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-medium text-gray-500">
              {codeSamples[activeTab]?.configFile}
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>

          {languageOptions.map(lang => (
            <TabsContent key={lang} value={lang} className="mt-0">
            <CodeDisplay code={codeSamples[lang]?.sampleCode || "// No code available"} language={lang} />
          </TabsContent>
          
          ))}
        </Tabs>
        
        <Box sx={{ mb: 2, mt: 4 }}>
          <div>
            <Button onClick={handleNext} className="gap-2">
              Continue
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}