"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {

  const { user, loading: authLoading } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const clearTransactions = () => {
    setTransactions([]);
  };


  // GET - Fetch transactions
  const fetchTransactions = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/transactions", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch transactions");
      }

      setTransactions(data.transactions || []);
    } catch (error) {
      console.error("Fetch transactions error:", error);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  if (authLoading) {
    return;
  }

  if (!user) {
    setTransactions([]);
    setLoading(false);
    return;
  }

  fetchTransactions();
}, [user, authLoading]);


  // POST - Add transaction
  const addTransaction = async (transactionData) => {
    try {
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(transactionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add transaction");
      }

      // Add newly created transaction to existing state
      setTransactions((prevTransactions) => [
        data.transaction,
        ...prevTransactions,
      ]);

      return data.transaction;
    } catch (error) {
      console.error("Add transaction error:", error);
      throw error;
    }
  };


  // PATCH - Update transaction
  const updateTransaction = async (transactionId, updatedData) => {
    try {
      const response = await fetch("/api/transactions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          transactionId,
          ...updatedData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update transaction");
      }

      // Replace the old transaction with updated transaction
      setTransactions((prevTransactions) =>
        prevTransactions.map((transaction) =>
          transaction._id === transactionId ? data.transaction : transaction,
        ),
      );

      return data.transaction;
    } catch (error) {
      console.error("Update transaction error:", error);
      throw error;
    }
  };


  // DELETE - Delete transaction
  const deleteTransaction = async (transactionId) => {
    try {
      setDeletingId(transactionId);

      const response = await fetch("/api/transactions", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          transactionId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete transaction");
      }

      // Remove deleted transaction from state
      setTransactions((prevTransactions) =>
        prevTransactions.filter(
          (transaction) => transaction._id !== transactionId,
        ),
      );

      return data.transaction;
    } catch (error) {
      console.error("Delete transaction error:", error);
      throw error;
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        loading,
        deletingId,
        adding,
        updatingId,

        fetchTransactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        clearTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

// Custom hook
export function useTransactions() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error("useTransactions must be used inside TransactionProvider");
  }

  return context;
}
