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
    <div className="responsive-chart-container spending-chart">
      <h2 className="text-lg font-semibold">
        Spending by Category
      </h2>

      <p className="mb-4 text-sm text-gray-500">
        All transactions
      </p>

      <div className="spending-chart-area">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              outerRadius="55%"
              paddingAngle={2}
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

            <Legend
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{
                fontSize: "12px",
                width: "100%",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}