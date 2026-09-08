import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function RecentTransactions({ transactions }) {
  return (
    <div className="responsive-card bg-white ">
      <h2 className="text-lg font-semibold">
        Recent Transaction{" "}
        <FontAwesomeIcon
          icon={faAngleDown}
          className="text-gray-400"
        />
      </h2>

      <div className="mt-2">
        <ul>
          {transactions.map((transaction) => (
            <div
              key={transaction._id}
              className="flex justify-between border-b border-gray-300 mt-2 pt-2"
            >
              <li className="text-lg font-semibold">
                {transaction.description}

                <div className="flex gap-4 mb-2">
                  <p className="text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-sm text-gray-500">
                    {transaction.category}
                  </p>
                </div>
              </li>

              <p
                className={`text-lg font-semibold ${
                  transaction.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}₹
                {Number(transaction.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}