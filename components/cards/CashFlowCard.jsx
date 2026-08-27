import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faBagShopping,
  faChartColumn,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

export default function CashFlow({ income, expense }) {
  const budgetLeft = Number(income) - Number(expense);
  const netWorth = Number(income) - Number(expense)

  return (
    <div className=" h-24 flex items-center justify-between  overflow-hidden gap-2 border-2 border-gray-200 shadow-sm rounded-2xl p-4 bg-white">
      {/* Income */}
      <div className="flex flex-1 items-center ml-4 border-r border-gray-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-100">
            <FontAwesomeIcon icon={faWallet} className="text-violet-500 fa-2x" />
          </div>
          <ul className="flex flex-col">
            <li className="font-semibold">Income</li>
            <li className="font-medium text-2xl text-violet-700"> ₹{Number(income).toFixed(2)}</li>
            <li className="text-sm text-gray-500">Total income</li>
          </ul>
        </div>
      </div>

      {/* Expenses */}
      <div className="flex flex-1 items-center justify-center border-r border-gray-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red-100 ">
            <FontAwesomeIcon icon={faBagShopping} className="text-red-500 fa-2x" />
          </div>
          <ul className="flex flex-col">
            <li className="font-semibold">Expenses</li>
            <li className="font-medium text-2xl text-red-500">₹{Number(expense).toFixed(2)}</li>
            <li className="text-sm text-gray-500">Total expense</li>
          </ul>
        </div>
      </div>

      {/* Budget Left */}
      <div className="flex flex-1 items-center justify-center border-r border-gray-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-100">
            <FontAwesomeIcon icon={faChartColumn} className="text-green-500 fa-2x" />
          </div>
          <ul className="flex flex-col">
            <li className="font-semibold">Budget Left</li>
            <li className="font-medium text-2xl text-green-500">₹{Number(budgetLeft).toFixed(2)}</li>
            <li className="text-sm text-gray-500">Total budgetleft</li>
          </ul>
        </div>
      </div>

      {/* Net Worth */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-100">
            <FontAwesomeIcon icon={faCoins} className="text-yellow-500 fa-2x" />
          </div>
          <ul className="flex flex-col">
            <li className="font-semibold">Net Worth</li>
            <li className="font-medium text-2xl text-yellow-500">₹{Number(netWorth).toFixed(2)}</li>
            <li className="text-sm text-gray-500">Total networth</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
