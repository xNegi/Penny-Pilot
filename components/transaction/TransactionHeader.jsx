import { FaPlus } from "react-icons/fa";

export default function TransactionHeader({ onAddTransaction }) {
  return (
    <header className="transaction-header">
      <div className="transaction-header-content">
        <h1>Transactions</h1>
        <p>
          Track all your income, expenses and money you owe.
        </p>
      </div>

      <button
        onClick={onAddTransaction}
        className="transaction-add-button"
      >
        <FaPlus />
        <span>Add Transaction</span>
      </button>
    </header>
  );
}