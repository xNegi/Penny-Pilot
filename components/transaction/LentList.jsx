import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function LentList({ transactions = [] }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="bg-green-200 text-green-700 rounded-4xl p-2"
          />

          <p className="font-bold">Lent To</p>
        </div>

        <button className="font-medium text-violet-700">
          View All
        </button>
      </div>

      <div className="h-50 mt-4 border border-gray-300 rounded-2xl p-4">
        <ul className="space-y-4">
          {transactions.slice(0, 2).map((transaction, index) => (
            <li
              key={transaction._id}
              className={`flex items-center justify-between ${
                index !== 0 ? "border-t border-gray-200 pt-4" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                  {transaction.description?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="font-semibold">
                    {transaction.description}
                  </p>

                  <p className="text-sm text-gray-500">
                    {transaction.status || "Pending"}
                  </p>
                </div>
              </div>

              <p className="font-semibold text-green-600">
                +₹{transaction.amount}
              </p>
            </li>
          ))}
        </ul>

        {transactions.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-4">
            No lent money
          </p>
        )}
      </div>
    </div>
  );
}