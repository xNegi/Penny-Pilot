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

  const recentTransactions = transactions.slice(0, 5);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
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
      <div className="transaction-history-card">
        <h2 className="transaction-history-title">
          Transaction History{" "}
          <FontAwesomeIcon
            icon={faClock}
            className="text-gray-400"
          />
        </h2>

        <div className="transaction-history-list">
          <ul>
            {transactions.length === 0 ? (
              <p className="transaction-empty">
                No transactions yet.
              </p>
            ) : (
              recentTransactions.map((transaction) => (
                <li
                  key={transaction._id}
                  className="transaction-row"
                >
                  <div className="transaction-details">
                    <p className="transaction-description">
                      {transaction.description}
                    </p>

                    <div className="transaction-meta">
                      <p>
                        {transaction.date
                          ? new Date(
                              transaction.date
                            ).toLocaleDateString()
                          : "No date"}
                      </p>

                      <p>{transaction.category}</p>
                    </div>
                  </div>

                  <p
                    className={`transaction-amount ${
                      transaction.type === "income"
                        ? "income"
                        : "expense"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}₹
                    {Number(transaction.amount).toFixed(2)}
                  </p>

                  <div className="transaction-actions">
                    <button
                      onClick={() => onEdit(transaction)}
                      aria-label="Edit transaction"
                    >
                      <MdEdit size={20} />
                    </button>

                    <button
                      className="delete"
                      onClick={() =>
                        handleDelete(transaction._id)
                      }
                      disabled={deletingId === transaction._id}
                      aria-label="Delete transaction"
                    >
                      {deletingId === transaction._id ? (
                        <span className="transaction-spinner" />
                      ) : (
                        <MdDelete size={20} />
                      )}
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>

          {transactions.length > 5 && (
            <div className="transaction-view-more">
              <button onClick={handleViewMore}>
                View More
              </button>
            </div>
          )}
        </div>
      </div>

      {showAll && (
        <div className="transaction-modal-overlay">
          <div className="transaction-modal">
            <div className="transaction-modal-header">
              <div>
                <h2>All Transactions</h2>

                <p>
                  Showing {startIndex + 1}–
                  {Math.min(
                    startIndex + transactionsPerPage,
                    transactions.length
                  )}{" "}
                  of {transactions.length} transactions
                </p>
              </div>

              <button
                onClick={handleClose}
                className="transaction-modal-close"
                aria-label="Close"
              >
                <MdClose size={24} />
              </button>
            </div>

            <div className="transaction-modal-list">
              <ul>
                {paginatedTransactions.map((transaction) => (
                  <li
                    key={transaction._id}
                    className="transaction-row"
                  >
                    <div className="transaction-details">
                      <p className="transaction-description">
                        {transaction.description}
                      </p>

                      <div className="transaction-meta">
                        <p>
                          {transaction.date
                            ? new Date(
                                transaction.date
                              ).toLocaleDateString()
                            : "No date"}
                        </p>

                        <p>{transaction.category}</p>
                      </div>
                    </div>

                    <p
                      className={`transaction-amount ${
                        transaction.type === "income"
                          ? "income"
                          : "expense"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}₹
                      {Number(transaction.amount).toFixed(2)}
                    </p>

                    <div className="transaction-actions">
                      <button
                        onClick={() => onEdit(transaction)}
                        aria-label="Edit transaction"
                      >
                        <MdEdit size={20} />
                      </button>

                      <button
                        className="delete"
                        onClick={() =>
                          handleDelete(transaction._id)
                        }
                        disabled={
                          deletingId === transaction._id
                        }
                        aria-label="Delete transaction"
                      >
                        {deletingId === transaction._id ? (
                          <span className="transaction-spinner" />
                        ) : (
                          <MdDelete size={20} />
                        )}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {totalPages > 1 && (
              <div className="transaction-pagination">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => prev - 1)
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page ? "active" : ""
                    }
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => prev + 1)
                  }
                  disabled={currentPage === totalPages}
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