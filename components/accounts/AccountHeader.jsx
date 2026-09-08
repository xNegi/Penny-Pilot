import { FaPlus } from "react-icons/fa6";

export default function AccountHeader({ onAddAccount }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold">Accounts</h1>
        <p className="text-sm text-gray-500">
          Manage all your payment methods in one place.
        </p>
      </div>

      <button
        onClick={onAddAccount}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700 sm:w-auto"
      >
        <FaPlus />
        Add Account
      </button>
    </div>
  );
}