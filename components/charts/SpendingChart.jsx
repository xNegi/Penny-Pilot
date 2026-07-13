"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Food", value: 500 },
  { name: "Transport", value: 300 },
  { name: "Shopping", value: 700 },
];

const COLORS = ["#8B5CF6", "#EF4444", "#F59E0B"];

export default function SpendingChart() {
  return (
    <div className="h-90 w-[33%] rounded-3xl bg-white p-6 border-2 border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold">Spending by Category</h2>
      <p className="mb-6 text-sm text-gray-500">This month</p>

      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
