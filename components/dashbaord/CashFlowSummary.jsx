const data = [
  { day: "May 1", income: 1800, expense: 800 },
  { day: "May 5", income: 3000, expense: 1200 },
  { day: "May 10", income: 4200, expense: 1800 },
  { day: "May 15", income: 3900, expense: 1700 },
  { day: "May 20", income: 4700, expense: 2300 },
  { day: "May 24", income: 4800, expense: 2100 },
  { day: "May 31", income: 5900, expense: 3500 },
];

const totalIncome = data.reduce((total, item) => {
  return total + item.income;
}, 0);

const totalExpense = data.reduce((total, item) => {
  return total + item.expense;
}, 0);

const netCashFlow = totalIncome - totalExpense;


export default function CashFlwoSummary() {
    return (
        <div className="h-90 w-[30%] rounded-3xl bg-white p-6 border-2 border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold">
                Cash flow summary
            </h2>

            <p className="mt-2 mb-6 text-sm text-gray-500">
                This month
            </p>

            <ul className="flex flex-col gap-4 text-lg">
                <li className="flex justify-between font-medium border-b border-gray-200 py-4 px-2 gap-4">Total Income <p className="text-green-600">${totalIncome.toLocaleString()}</p></li>
                <li className="flex justify-between font-medium border-b border-gray-200 py-4 px-2 gap-4">Total Expense <p className="text-red-600">${totalExpense.toLocaleString()}</p> </li>
                <li className="flex justify-between font-medium text-green-700 bg-green-200 rounded-2xl py-4 px-2 gap-4">Net Cash Flow <p className="text-green-700">${netCashFlow.toLocaleString()}</p> </li>
            </ul>
        </div>
    )
}
