"use client";

import DashboardHeader from "@/components/dashbaord/DashboardHeader";
import BalanceCard from "@/components/cards/BalanceCard";
import CashFlowCard from "@/components/cards/CashFlowCard";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import SpendingChart from "@/components/charts/SpendingChart";
import SavingsGoals from "@/components/dashbaord/SavingsGoals";
import RecentTransactions from "@/components/dashbaord/RecentTransactions";
import CashFlwoSummary from "@/components/dashbaord/CashFlowSummary";
import { useTransactions } from "@/context/TransactionContext";
import { useAuth } from "@/context/AuthContext";
import { demoTransactions } from "@/data/demoTransactions";
import useTransactionCalculations from "@/hooks/useTransactionCalculations";

export default function Page() {
  const { user , loading: authLoading } = useAuth();
  const { transactions, loading: transactionLoading } = useTransactions();

  if (authLoading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  const displayTransactions = user ? transactions || [] : demoTransactions;
  if (user && transactionLoading) {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
    </div>
  );
}

const {
  totalIncome,
  totalExpense,
  balance,
  recentTransactions,
} = useTransactionCalculations(displayTransactions);


  return (
    <div className="flex flex-col gap-4 my-2 mx-4">
      <DashboardHeader />

      <BalanceCard balance={balance} />

      <CashFlowCard income={totalIncome} expense={totalExpense} />

      <div className="flex gap-6">
        <div className="flex-1">
          <SpendingChart transactions={displayTransactions} />
        </div>

        <div className="flex-1">
          <SavingsGoals />
        </div>

        <div className="flex-1">
          <RecentTransactions transactions={recentTransactions} />
        </div>
      </div>

      <div className="flex gap-4">
        <IncomeExpenseChart transactions={displayTransactions} />

        <CashFlwoSummary transactions={displayTransactions} />
      </div>
    </div>
  );
}
