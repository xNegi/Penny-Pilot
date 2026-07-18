"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart
} from "recharts";

const data = [
  { day: "May 1", income: 1800, expense: 800 },
  { day: "May 5", income: 3000, expense: 1200 },
  { day: "May 10", income: 4200, expense: 1800 },
  { day: "May 15", income: 3900, expense: 1700 },
  { day: "May 20", income: 4700, expense: 2300 },
  { day: "May 24", income: 4800, expense: 2100 },
  { day: "May 31", income: 5900, expense: 3500 },
];



export default function IncomeExpenseChart() {
    return (
   <div className="h-90 w-full flex justify-between rounded-3xl bg-white p-6 border-2 border-gray-200 shadow-sm">   
    <div className="h-80 w-full">
      <h2 className="text-lg font-semibold">
        Income vs Expenses
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        This month
      </p>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3}/>
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>

            <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity={0.3}/>
              <stop offset="100%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis dataKey="day" />

          <YAxis/>

          <Tooltip />

          <AreaChart data={data}>
            <Area
            type="monotone"
            dataKey="income"
            fill="url(#income)"
            stroke="none"
            />

            <Area
            type="monotone"
            dataKey="expense"
            fill="url(#expense)"
            stroke="none"
            />
          </AreaChart>

          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
   
  </div>
    )
}