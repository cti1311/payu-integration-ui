// lib/payu/config.js

// Configuration for PayU integration
export const payuConfig = {
    
    // Steps for integration process
    integrationSteps: [
      { 
        title: "Setup Account", 
        completed: true 
      },
      { 
        title: "Select Checkout Solution", 
        completed: true 
      },
      { 
        title: "Design Payment Page", 
        completed: true 
      },
      { 
        title: "Integrate Prebuilt Library", 
        active: true,
        subItems: ["Payment Initiation", "Payment Verification"]
      },
      { 
        title: "Test Payment & Go-Live" 
      }
    ],
    
    // Language options for code examples
    languageOptions: ["java", "node", "php", "python"],
    
    // Code samples for different languages
    codeSamples: {
        java: {
          configFile: "CONFIG.JAVA",
          sampleCode: "public class PayUConfig { ... }"
        },
        node: {
          configFile: "INDEX.JS",
          sampleCode: "const payu = require('payu-sdk'); ..."
        },
        php: {
          configFile: "CONFIG.PHP",
          sampleCode: "<?php echo 'PayU Config'; ?>"
        },
        python: {
          configFile: "CONFIG.PY",
          sampleCode: "import payu_sdk\nprint('PayU Config')"
        }
      }      
  };