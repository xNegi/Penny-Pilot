import { FaPlus } from "react-icons/fa6";

export default function AccountHeader({ onAddAccount }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Accounts</h1>
        <p className="text-gray-500 font-sm">
          Manage all your payment methods in one place.
        </p>
      </div>
      <div>
        <button
          onClick={onAddAccount}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700 transition"
        >
          <FaPlus />
          Add Account
        </button>
      </div>
    </div>
  );
}
