// components/payu/CodeDisplay.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function CodeDisplay({ code, language }) {
  return (
    <Card className="border-gray-200 bg-gray-50">
      <CardContent className="p-4 font-mono text-sm overflow-auto max-h-96">
        <pre className="text-gray-800">
          {code}
        </pre>
      </CardContent>
    </Card>
  );
}