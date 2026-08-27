"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#8B5CF6",
  "#EF4444",
  "#F59E0B",
  "#22C55E",
  "#3B82F6",
  "#EC4899",
  "#14B8A6",
];

export default function SpendingChart({ transactions = [] }) {
  const categoryTotals = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((data, transaction) => {
      const category = transaction.category || "Other";
      const amount = Number(transaction.amount);

      if (!data[category]) {
        data[category] = 0;
      }

      data[category] += amount;

      return data;
    }, {});

  const data = Object.entries(categoryTotals).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <div className="h-90 w-full rounded-3xl bg-white p-6 border-2 border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold">
        Spending by Category
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        All transactions
      </p>

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

          <Tooltip
            formatter={(value) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
          />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}