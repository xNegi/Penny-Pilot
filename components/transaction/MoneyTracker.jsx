import BorrowedList from "./BorrowedList";
import LentList from "./LentList";
import { useTransactions } from "@/context/TransactionContext";

export default function MoneyTracker() {
  const { transactions } = useTransactions();
  
  const borrowedTransactions = transactions.filter(
    (transaction) => transaction.category === "borrowed",
  );

  const lentTransactions = transactions.filter(
    (transaction) => transaction.category === "lent",
  );

  return (
    <div className="flex flex-col w-[35%] gap-4  rounded-3xl bg-white p-4 border-2 border-gray-200 shadow-sm">
      {/* Borrowed From */}
      <div className="flex-1">
        <BorrowedList transactions={borrowedTransactions} />
      </div>

      {/* Lent To */}
      <div className="flex-1">
        <LentList transactions={lentTransactions} />
      </div>
    </div>
  );
}
