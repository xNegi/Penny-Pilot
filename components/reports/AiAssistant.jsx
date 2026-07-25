// components/reports/AIInsightsPanel.jsx
"use client";

import {
  FaRobot,
  FaPaperPlane,
  FaChartLine,
  FaPiggyBank,
  FaWallet,
  FaLightbulb,
} from "react-icons/fa";

export default function AIInsightsPanel() {
  const suggestions = [
    "How much did I spend this month?",
    "Where can I save more money?",
    "Compare this month vs last month",
    "Create a budget plan for me",
  ];

  return (
    <div className="w-full rounded-2xl border-2 border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-100 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
            <FaRobot className="text-xl text-violet-600" />
          </div>

          <div>
            <h2 className="font-semibold text-lg">Penny AI</h2>
            <p className="text-sm text-gray-500">
              Your personal finance assistant
            </p>
          </div>
        </div>
      </div>

      {/* Greeting */}
      <div className="p-5">
        <div className="rounded-xl bg-violet-50 p-4">
          <p className="text-sm text-gray-700">
            👋 Hi Aryan!
          </p>

          <p className="mt-2 text-sm text-gray-600 leading-6">
            Ask me anything about your expenses, savings, investments or
            budgeting. I'll analyze your transactions and provide smart
            financial insights.
          </p>
        </div>
      </div>

      {/* Suggestions */}
      <div className="px-5">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">
          Suggested Questions
        </h3>

        <div className="space-y-3">
          {suggestions.map((item) => (
            <button
              key={item}
              className="w-full rounded-xl border border-gray-200 p-3 text-left text-sm transition hover:border-violet-400 hover:bg-violet-50"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Insights */}
      <div className="px-5 pt-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">
          AI Insights
        </h3>

        <div className="space-y-3">
          <div className="flex gap-3 rounded-xl bg-green-50 p-3">
            <FaChartLine className="mt-1 text-green-600" />
            <div>
              <p className="font-medium text-sm">
                Spending Increased
              </p>
              <p className="text-xs text-gray-600">
                Your spending increased by 12% compared to last month.
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-xl bg-blue-50 p-3">
            <FaPiggyBank className="mt-1 text-blue-600" />
            <div>
              <p className="font-medium text-sm">
                Savings Opportunity
              </p>
              <p className="text-xs text-gray-600">
                Reducing food expenses by 10% could save ₹2,000/month.
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-xl bg-yellow-50 p-3">
            <FaLightbulb className="mt-1 text-yellow-600" />
            <div>
              <p className="font-medium text-sm">
                Smart Recommendation
              </p>
              <p className="text-xs text-gray-600">
                You're close to your entertainment budget limit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 p-5">
        <div className="rounded-xl border p-4 text-center">
          <FaWallet className="mx-auto mb-2 text-violet-600" />
          <p className="text-xs text-gray-500">This Month</p>
          <h4 className="font-bold text-lg">₹42,370</h4>
        </div>

        <div className="rounded-xl border p-4 text-center">
          <FaPiggyBank className="mx-auto mb-2 text-green-600" />
          <p className="text-xs text-gray-500">Savings</p>
          <h4 className="font-bold text-lg">₹26,080</h4>
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t border-gray-100 p-5">
        <div className="flex items-center rounded-xl border border-gray-200 px-4 py-3">
          <input
            type="text"
            placeholder="Ask Penny AI..."
            className="flex-1 bg-transparent text-sm outline-none"
          />

          <button className="rounded-lg bg-violet-600 p-2 text-white transition hover:bg-violet-700">
            <FaPaperPlane />
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-gray-400">
          AI responses may be inaccurate. Verify financial decisions.
        </p>
      </div>
    </div>
  );
}