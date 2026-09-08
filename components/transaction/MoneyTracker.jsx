import BorrowedList from "./BorrowedList";
import LentList from "./LentList";
import { useTransactions } from "@/context/TransactionContext";

export default function MoneyTracker() {
  const { transactions } = useTransactions();

  const borrowedTransactions = transactions.filter(
    (transaction) => transaction.category === "borrowed"
  );

  const lentTransactions = transactions.filter(
    (transaction) => transaction.category === "lent"
  );

  return (
    <div className="money-tracker">
      <div className="money-tracker-section">
        <BorrowedList transactions={borrowedTransactions} />
      </div>

      <div className="money-tracker-section">
        <LentList transactions={lentTransactions} />
      </div>
    </div>
  );
}