"use client";

import { useState , useEffect } from "react";

export default function AddAccount({ onClose, onAddAccount, editAccount }) {
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [initialBalance, setInitialBalance] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // Fill form when editing
  useEffect(() => {
    if (editAccount) {
      setAccountName(editAccount.accountName || "");
      setAccountType(editAccount.accountType || "");
      setInitialBalance(editAccount.initialBalance?.toString() || "");
    } else {
      setAccountName("");
      setAccountType("");
      setInitialBalance("");
    }
  }, [editAccount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountName.trim() || !accountType || initialBalance === "") {
      setError("Please fill in all fields.");
      return;
    }
    try {
      setLoading(true);
      setError("");

      //EDIT ACCOUNT
      if (editAccount) {
        const response = await fetch("/api/accounts", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            accountId: editAccount._id,
            accountName: accountName.trim(),
            accountType,
            initialBalance: Number(initialBalance),
          }),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to update account");
        }
        onAddAccount(data.account);
        onClose();
        return;
      }

      //ADD ACCOUNT
      const response = await fetch("/api/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          accountName: accountName.trim(),
          accountType,
          initialBalance: Number(initialBalance),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to create account");
      }
      onAddAccount(data.account);
      onClose();
    } catch (error) {
      console.error("Account error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">{editAccount ? "Edit Account" : "Add Account"}</h2>

          <p className="mt-1 text-sm text-gray-500">
            Add a new payment account to manage your finances.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Account Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Account Name
            </label>

            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="e.g. HDFC Bank"
              disabled={loading}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black disabled:bg-gray-100"
            />
          </div>

          {/* Account Type */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Account Type
            </label>

            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              disabled={loading}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-black disabled:bg-gray-100"
            >
              <option value="">Select account type</option>
              <option value="bank">Bank Account</option>
              <option value="cash">Cash</option>
              <option value="credit-card">Credit Card</option>
              <option value="wallet">Digital Wallet</option>
            </select>
          </div>

          {/* Initial Balance */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Initial Balance
            </label>

            <input
              type="number"
              min="0"
              value={initialBalance}
              onChange={(e) => setInitialBalance(e.target.value)}
              placeholder="₹ 0.00"
              disabled={loading}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black disabled:bg-gray-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-black px-5 py-3 font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Adding..." : editAccount ? "Update Account" : "Add Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
