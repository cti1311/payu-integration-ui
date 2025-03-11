// components/payu/CodeDisplay.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeDisplay({ code, language }) {
    console.log(language)
  return (
    <Card className="border-gray-200 bg-gray-50">
      <CardContent className="p-4 font-mono text-sm overflow-auto max-h-96">
        <SyntaxHighlighter language={language} style={docco}>
          {code}
        </SyntaxHighlighter>
      </CardContent>
    </Card>
  );
}
