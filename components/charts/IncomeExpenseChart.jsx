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
} from "recharts";

export default function IncomeExpenseChart({ transactions = [] }) {
  const chartData = transactions
    .reduce((data, transaction) => {
      const date = new Date(transaction.date);

      const day = date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      });

      let existingDay = data.find((item) => item.day === day);

      if (!existingDay) {
        existingDay = {
          day,
          income: 0,
          expense: 0,
          date: date.getTime(),
        };

        data.push(existingDay);
      }

      if (transaction.type === "income") {
        existingDay.income += Number(transaction.amount);
      }

      if (transaction.type === "expense") {
        existingDay.expense += Number(transaction.amount);
      }

      return data;
    }, [])
    .sort((a, b) => a.date - b.date);

  return (
    <div className="h-90 w-full flex justify-between rounded-3xl bg-white p-6 border-2 border-gray-200 shadow-sm">
      <div className="h-80 w-full">
        <h2 className="text-lg font-semibold">
          Income vs Expenses
        </h2>

        <p className="mb-6 text-sm text-gray-500">
          All transactions
        </p>

        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={chartData}>
            <defs>
              <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="#22c55e"
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor="#22c55e"
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="#ef4444"
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor="#ef4444"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip
              formatter={(value) => `₹${Number(value).toFixed(2)}`}
            />

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
  );
}