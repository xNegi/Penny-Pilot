"use client";

import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function AccountCard({
  account,
  onEdit,
  onDelete,
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-4">
        {/* Account Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-2xl">
          {account.accountType === "bank" && "🏦"}
          {account.accountType === "cash" && "💵"}
          {account.accountType === "credit-card" && "💳"}
          {account.accountType === "wallet" && "👛"}
        </div>

        <div>
          {/* Account Name + Type */}
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">
              {account.accountName}
            </h2>

            <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-medium capitalize text-violet-700">
              {account.accountType}
            </span>
          </div>

          {/* Account Type */}
          <p className="text-sm text-gray-500">
            {account.accountType === "bank" && "Bank Account"}
            {account.accountType === "cash" && "Cash"}
            {account.accountType === "credit-card" && "Credit Card"}
            {account.accountType === "wallet" && "Digital Wallet"}
          </p>

          {/* Balance */}
          <p className="mt-1 text-sm font-medium">
            Balance: ₹
            {Number(account.initialBalance).toLocaleString("en-IN")}
          </p>

        </div>
      </div>

      {/* More Button + Dropdown */}
      <div className="relative">

        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <HiOutlineDotsVertical size={20} />
        </button>

        {showMenu && (
          <div className="absolute right-0 top-10 z-20 w-32 rounded-xl border border-gray-200 bg-white p-1 shadow-lg">

            <button
              onClick={() => {
                setShowMenu(false);
                onEdit(account);
              }}
              className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
            >
              Edit
            </button>

            <button
              onClick={() => {
                setShowMenu(false);
                onDelete(account);
              }}
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              Delete
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

