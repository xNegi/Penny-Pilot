import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faBagShopping,
  faChartColumn,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

export default function CashFlow({ income, expense }) {
  const budgetLeft = Number(income) - Number(expense);
  const netWorth = Number(income) - Number(expense);

  return (
    <div className="content-fix grid grid-cols-2 md:flex md:items-center md:justify-between gap-0 md:gap-2 border-2 border-gray-200 shadow-sm rounded-2xl p-2 md:p-4 bg-white">

      {/* Income */}
      <div className="flex flex-1 items-center justify-center md:justify-start md:ml-6 p-3 md:p-0 border-r border-b md:border-r md:border-b-0 border-gray-300">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-violet-100">
            <FontAwesomeIcon
              icon={faWallet}
              className="text-violet-500 text-lg md:text-2xl"
            />
          </div>

          <ul className="flex flex-col min-w-0">
            <li className="font-semibold text-xs md:text-base">
              Income
            </li>
            <li className="font-medium text-base md:text-2xl text-violet-700 truncate">
              ₹{Number(income).toFixed(2)}
            </li>
            <li className="text-[10px] md:text-sm text-gray-500">
              Total income
            </li>
          </ul>
        </div>
      </div>

      {/* Expenses */}
      <div className="flex flex-1 items-center justify-center p-3 md:p-0 border-b md:border-b-0 md:border-r border-gray-300">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-red-100">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="text-red-500 text-lg md:text-2xl"
            />
          </div>

          <ul className="flex flex-col min-w-0">
            <li className="font-semibold text-xs md:text-base">
              Expenses
            </li>
            <li className="font-medium text-base md:text-2xl text-red-500 truncate">
              ₹{Number(expense).toFixed(2)}
            </li>
            <li className="text-[10px] md:text-sm text-gray-500">
              Total expense
            </li>
          </ul>
        </div>
      </div>

      {/* Budget Left */}
      <div className="flex flex-1 items-center justify-center p-3 md:p-0 border-r md:border-r md:border-b-0 border-gray-300">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-green-100">
            <FontAwesomeIcon
              icon={faChartColumn}
              className="text-green-500 text-lg md:text-2xl"
            />
          </div>

          <ul className="flex flex-col min-w-0">
            <li className="font-semibold text-xs md:text-base">
              Budget Left
            </li>
            <li className="font-medium text-base md:text-2xl text-green-500 truncate">
              ₹{Number(budgetLeft).toFixed(2)}
            </li>
            <li className="text-[10px] md:text-sm text-gray-500">
              Total budget left
            </li>
          </ul>
        </div>
      </div>

      {/* Net Worth */}
      <div className="flex flex-1 items-center justify-center p-3 md:p-0">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-yellow-100">
            <FontAwesomeIcon
              icon={faCoins}
              className="text-yellow-500 text-lg md:text-2xl"
            />
          </div>

          <ul className="flex flex-col min-w-0">
            <li className="font-semibold text-xs md:text-base">
              Net Worth
            </li>
            <li className="font-medium text-base md:text-2xl text-yellow-500 truncate">
              ₹{Number(netWorth).toFixed(2)}
            </li>
            <li className="text-[10px] md:text-sm text-gray-500">
              Total net worth
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}