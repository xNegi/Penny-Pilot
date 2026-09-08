"use client";

export default function CashFlwoSummary({ transactions = [] }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce(
      (total, transaction) => total + Number(transaction.amount),
      0
    );

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (total, transaction) => total + Number(transaction.amount),
      0
    );

  const netCashFlow = totalIncome - totalExpense;

  return (
    <div className="responsive-card bg-white">
      <h2 className="text-lg font-semibold">
        Cash flow summary
      </h2>

      <p className="mt-2 mb-6 text-sm text-gray-500">
        All transactions
      </p>

      <ul className="flex flex-col gap-4 text-lg">
        <li className="flex justify-between font-medium border-b border-gray-200 py-4 px-2 gap-4">
          Total Income
          <p className="text-green-600">
            ₹{totalIncome.toLocaleString("en-IN")}
          </p>
        </li>

        <li className="flex justify-between font-medium border-b border-gray-200 py-4 px-2 gap-4">
          Total Expense
          <p className="text-red-600">
            ₹{totalExpense.toLocaleString("en-IN")}
          </p>
        </li>

        <li className="flex justify-between font-medium text-green-700 bg-green-200 rounded-2xl py-4 px-2 gap-4">
          Net Cash Flow
          <p className="text-green-700">
            ₹{netCashFlow.toLocaleString("en-IN")}
          </p>
        </li>
      </ul>
    </div>
  );
}