"use client";

import { useState } from "react";

import AddTransaction from "@/components/transaction/AddTransaction";
import TransactionHeader from "@/components/transaction/TransactionHeader";
import CashFlowCard from "@/components/cards/CashFlowCard";
import TransactionHistory from "@/components/transaction/TransactionHistory";
import SpendingChart from "@/components/charts/SpendingChart";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import MoneyTracker from "@/components/transaction/MoneyTracker";
import { useTransactions } from "@/context/TransactionContext";
import DemoDataModal from "@/components/cards/DemoDataModal";
import { useAuth } from "@/context/AuthContext";
import { demoTransactions } from "@/data/demoTransactions";
import useTransactionCalculations from "@/hooks/useTransactionCalculations";

export default function Page() {
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const { user, loading: authLoading } = useAuth();
  const { transactions, loading: transactionLoading } = useTransactions();
  const [showDemoModal, setShowDemoModal] = useState(false);

  if (authLoading) {
    return (
      <div className="flex min-h-[125px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  const displayTransactions = user ? transactions || [] : demoTransactions;

  if (user && transactionLoading) {
    return (
      <div className="flex min-h-[125px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  const { totalIncome, totalExpense } =
    useTransactionCalculations(displayTransactions);

  return (
    <div className="transactions-page">
      <TransactionHeader
        onAddTransaction={() => {
          if (!user) {
            setShowDemoModal(true);
            return;
          }

          setShowAddTransaction(true);
        }}
      />

      {showDemoModal && (
        <DemoDataModal onClose={() => setShowDemoModal(false)} />
      )}

      {showAddTransaction && (
        <AddTransaction
          onClose={() => {
            setShowAddTransaction(false);
            setEditingTransaction(null);
          }}
          transaction={editingTransaction}
        />
      )}

      <CashFlowCard
        income={totalIncome}
        expense={totalExpense}
      />

      <div className="transactions-main-grid">
        <TransactionHistory
          onEdit={(transaction) => {
            setEditingTransaction(transaction);
            setShowAddTransaction(true);
          }}
        />

        <MoneyTracker />
      </div>

      <div className="transactions-chart-grid">
        <SpendingChart transactions={displayTransactions} />
        <IncomeExpenseChart transactions={displayTransactions} />
      </div>
    </div>
  );
}