"use client";

import { useMemo } from "react";

export default function useTransactionCalculations(transactions = []) {
  const calculations = useMemo(() => {
    const safeTransactions = Array.isArray(transactions)
      ? transactions
      : [];

    const totalIncome = safeTransactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => {
        return total + Number(transaction.amount || 0);
      }, 0);

    const totalExpense = safeTransactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => {
        return total + Number(transaction.amount || 0);
      }, 0);

    const balance = totalIncome - totalExpense;

    const recentTransactions = [...safeTransactions]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);

    return {
      totalIncome,
      totalExpense,
      balance,
      recentTransactions,
    };
  }, [transactions]);

  return calculations;
}