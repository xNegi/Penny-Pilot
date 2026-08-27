"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { MdEdit, MdDelete, MdClose } from "react-icons/md";
import { useTransactions } from "@/context/TransactionContext";

export default function TransactionHistory({ onEdit }) {
  const { transactions, deleteTransaction, deletingId } = useTransactions();

  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const transactionsPerPage = 20;

  const totalPages = Math.ceil(
    transactions.length / transactionsPerPage
  );

  const startIndex = (currentPage - 1) * transactionsPerPage;

  const paginatedTransactions = transactions.slice(
    startIndex,
    startIndex + transactionsPerPage
  );

  // Only show the latest 5 transactions in the main card
  const recentTransactions = transactions.slice(0, 5);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?",
    );

    if (!confirmed) return;

    await deleteTransaction(id);
  };

  const handleViewMore = () => {
    setCurrentPage(1);
    setShowAll(true);
  };

  const handleClose = () => {
    setShowAll(false);
    setCurrentPage(1);
  };

  return (
    <>
      {/* =========================
          MAIN TRANSACTION CARD
      ========================== */}
      <div className="h-self-stretch w-[65%] rounded-3xl bg-white p-4 border-2 border-gray-200 shadow-sm">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold">
            Transaction History{" "}
            <FontAwesomeIcon
              icon={faClock}
              className="text-gray-400"
            />
          </h2>
        </div>

        <div className="mt-6">
          <ul>
            {transactions.length === 0 ? (
              <p className="h-70 flex items-center justify-center text-gray-500 py-6">
                No transactions yet.
              </p>
            ) : (
              recentTransactions.map((transaction) => (
                <li
                  key={transaction._id}
                  className="grid grid-cols-[1fr_auto_120px] items-center border-b border-gray-300 py-3"
                >
                  {/* Transaction Details */}
                  <div className="text-lg font-semibold">
                    {transaction.description}

                    <div className="flex gap-4 mb-2">
                      <p className="text-sm text-gray-500">
                        {transaction.date
                          ? new Date(
                              transaction.date
                            ).toLocaleDateString()
                          : "No date"}
                      </p>

                      <p className="text-sm text-gray-500">
                        {transaction.category}
                      </p>
                    </div>
                  </div>

                  {/* Amount */}
                  <p
                    className={`text-lg font-semibold text-center ${
                      transaction.type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}₹
                    {Number(transaction.amount).toFixed(2)}
                  </p>

                  {/* Actions */}
                  <div className="flex justify-end items-center gap-2">
                    <button
                      className="hover:cursor-pointer"
                      onClick={() => onEdit(transaction)}
                    >
                      <MdEdit size={20} />
                    </button>

                    <button
                      className="text-red-500 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                      onClick={() => handleDelete(transaction._id)}
                      disabled={deletingId === transaction._id}
                    >
                      {deletingId === transaction._id ? (
                        <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
                      ) : (
                        <MdDelete size={20} />
                      )}
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>

          {/* View More */}
          {transactions.length > 5 && (
            <div className="flex justify-center mt-5">
              <button
                onClick={handleViewMore}
                className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-medium text-white hover:bg-violet-700"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* =========================
          ALL TRANSACTIONS MODAL
      ========================== */}
      {showAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <div>
                <h2 className="text-xl font-semibold">
                  All Transactions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Showing {startIndex + 1}–
                  {Math.min(
                    startIndex + transactionsPerPage,
                    transactions.length
                  )}{" "}
                  of {transactions.length} transactions
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-black"
                aria-label="Close"
              >
                <MdClose size={24} />
              </button>
            </div>

            {/* Modal Transactions */}
            <div className="overflow-y-auto px-6">
              <ul>
                {paginatedTransactions.map((transaction) => (
                  <li
                    key={transaction._id}
                    className="grid grid-cols-[1fr_auto_120px] items-center border-b border-gray-300 py-4"
                  >
                    {/* Transaction Details */}
                    <div className="text-lg font-semibold">
                      {transaction.description}

                      <div className="flex gap-4 mb-2">
                        <p className="text-sm text-gray-500">
                          {transaction.date
                            ? new Date(
                                transaction.date
                              ).toLocaleDateString()
                            : "No date"}
                        </p>

                        <p className="text-sm text-gray-500">
                          {transaction.category}
                        </p>
                      </div>
                    </div>

                    {/* Amount */}
                    <p
                      className={`text-lg font-semibold text-center ${
                        transaction.type === "income"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}₹
                      {Number(transaction.amount).toFixed(2)}
                    </p>

                    {/* Actions */}
                    <div className="flex justify-end items-center gap-2">
                      <button
                        className="hover:cursor-pointer"
                        onClick={() => onEdit(transaction)}
                      >
                        <MdEdit size={20} />
                      </button>

                      <button
                        className="text-red-500 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                        onClick={() =>
                          handleDelete(transaction._id)
                        }
                        disabled={deletingId === transaction._id}
                      >
                        {deletingId === transaction._id ? (
                          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
                        ) : (
                          <MdDelete size={20} />
                        )}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* =========================
                PAGINATION
            ========================== */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 border-t border-gray-200 px-6 py-5">
                
                {/* Previous */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => prev - 1)
                  }
                  disabled={currentPage === 1}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                {/* Page Numbers */}
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-lg px-3 py-2 text-sm transition ${
                      currentPage === page
                        ? "bg-violet-600 text-white"
                        : "border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => prev + 1)
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}