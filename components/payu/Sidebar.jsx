// components/payu/Sidebar.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

export default function Sidebar({ activeStep, handleStepChange, integrationSteps }) {
  return (
    <div className="w-64 border-r border-gray-200 bg-white">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="6" fill="#1e8e3e" />
            <path
              d="M8 16H24M16 8V24"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <h1 className="text-lg font-bold text-gray-900">PayU</h1>
            <p className="text-xs text-gray-500">Developer Documentation</p>
          </div>
        </div>
      </div>

      <nav className="px-2 py-4">
        <ul className="space-y-1">
          {integrationSteps.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleStepChange(item.step || index)}
                className={`flex items-center gap-3 w-full px-3 py-2 text-left text-sm rounded-md ${
                  item.active
                    ? "bg-green-50 text-green-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                    item.active
                      ? "bg-green-100 text-green-700"
                      : item.completed
                      ? "bg-green-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {item.completed ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                {item.title}
              </button>

              {item.active && item.subItems && (
                <ul className="ml-9 mt-1 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href="#"
                        className={`block px-3 py-1 text-sm ${
                          subIndex === 0
                            ? "font-medium text-green-700 rounded-md bg-green-50"
                            : "text-gray-700 hover:bg-gray-100 rounded-md"
                        }`}
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
