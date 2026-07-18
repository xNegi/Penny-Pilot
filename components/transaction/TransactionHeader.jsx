export default function TransactionHeader() {
  const today = new Date();

  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">Transactions</h1>
        <p className="text-gray-500">
          Track all your income, expenses and money you owe.
        </p>
      </div>

      <div className="text-right">
        <button className="text-violet-700 bg-violet-200 rounded-2xl p-2 font-medium">+ Add Transaction</button>
      </div>
    </header>
  );
}
