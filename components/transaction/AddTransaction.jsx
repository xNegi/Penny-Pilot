"use client";

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useTransactions } from "@/context/TransactionContext";

export default function AddTransaction({ onClose, transaction }) {
  const { addTransaction, updateTransaction } = useTransactions();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const [person, setPerson] = useState( "");

  // Fill form when editing
  useEffect(() => {
    if (transaction) {
      setName(transaction.description || "");
      setAmount(transaction.amount || "");
      setDate(
        transaction.date
          ? new Date(transaction.date).toISOString().split("T")[0]
          : "",
      );
      setCategory(transaction.category || "");
      setType(transaction.type || "expense");
      setPerson(transaction.person || "");
    } else {
      // Reset form when adding
      setName("");
      setAmount("");
      setDate("");
      setCategory("");
      setType("expense");
      setPerson("");
    }
  }, [transaction]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !amount || !category) {
      alert("Please fill in all required fields.");
      return;
    }
    if ((category === "borrowed" || category === "lent") && !person) {
      alert("Please enter the person's name.");
      return;
    }

    try {
      const transactionData = {
        type,
        amount: Number(amount),
        category,
        description: name,
        date: date || null,
        person: category === "borrowed" || category === "lent" ? person : null,
      };

      // =========================
      // EDIT
      // =========================
      if (transaction) {
        await updateTransaction(transaction._id, transactionData);
      }

      // =========================
      // ADD
      // =========================
      else {
        await addTransaction(transactionData);
      }

      onClose();
    } catch (error) {
      alert(error.message || "Failed to save transaction");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">
              {transaction ? "Edit Transaction" : "Add Transaction"}
            </h2>

            <p className="text-sm text-gray-500">
              {transaction
                ? "Update your transaction details."
                : "Add a new income or expense."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <FaXmark size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Transaction name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Transaction Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Grocery shopping"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Transaction Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Transaction Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>

            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₹0.00"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="shopping">Shopping</option>
              <option value="household">Household</option>
              <option value="borrowed">Borrowed From</option>
              <option value="lent">Lent To</option>
              <option value="miscellaneous">Miscellaneous</option>
              <option value="others">Others</option>
            </select>
            {(category === "borrowed" || category === "lent") && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {category === "borrowed" ? "Borrowed From" : "Lent To"}
                  </label>

                  <input
                    type="text"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    placeholder={
                      category === "borrowed"
                        ? "e.g. Rohit Sharma"
                        : "e.g. Cristiano Ronaldo"
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white"
            >
              {transaction ? "Update Transaction" : "Add Transaction"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
