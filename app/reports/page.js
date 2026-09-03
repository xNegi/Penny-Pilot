"use client";

import ReportHeader from "@/components/reports/ReportHeader";
import CashFlow from "@/components/cards/CashFlowCard";
import SpendingChart from "@/components/charts/SpendingChart";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import CashFlowSummary from "@/components/dashbaord/CashFlowSummary";
import AIInsightsPanel from "@/components/reports/AiAssistant";
import PennyPilotCard from "@/components/cards/PennyPilotCard";
import { useTransactions } from "@/context/TransactionContext";
import { useAuth } from "@/context/AuthContext";
import useTransactionCalculations from "@/hooks/useTransactionCalculations";
import { demoTransactions } from "@/data/demoTransactions";

export default function Page() {
  const { user, loading: authLoading } = useAuth();
  const { transactions, loading: transactionLoading } = useTransactions();

  if (authLoading) {
    return (
      <div className="flex min-h-[125] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  const displayTransactions = user ? transactions : demoTransactions;

  if (user && transactionLoading) {
    return (
      <div className="flex min-h-[125] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  const { totalIncome, totalExpense } =
    useTransactionCalculations(displayTransactions);

  return (
    <div className="flex items-stretch gap-3 px-2 py-1">
      {/* Left */}
      <div className="w-3/5 flex flex-col gap-4">
        <ReportHeader />
        <CashFlow income={totalIncome} expense={totalExpense} />
        <SpendingChart transactions={displayTransactions} />

        <div className="flex gap-4">
          <div className="flex-1">
            <IncomeExpenseChart transactions={displayTransactions}/>
          </div>

          <div className="flex-1">
            <CashFlowSummary transactions={displayTransactions} />
          </div>
        </div>
        <PennyPilotCard />
      </div>

      {/* Right */}
      <div className="flex w-2/5">
        <AIInsightsPanel />
      </div>
    </div>
  );
}
