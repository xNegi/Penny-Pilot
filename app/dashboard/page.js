import DashboardHeader from "@/components/dashbaord/DashboardHeader";
import BalanceCard from "@/components/cards/BalanceCard";
import CashFlowCard from "@/components/cards/CashFlowCard";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import SpendingChart from "@/components/charts/SpendingChart"; 
import SavingsGoals from "@/components/dashbaord/SavingsGoals";
import RecentTransactions from "@/components/dashbaord/RecentTransactions";
import CashFlwoSummary from "@/components/dashbaord/CashFlowSummary";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 my-4 mx-8">
            <DashboardHeader/>
            <BalanceCard/>
            <CashFlowCard/>
            <div className="flex gap-6">
                <SpendingChart/>
                <SavingsGoals/>
                <RecentTransactions/>
            </div>
            <div className="flex gap-4">
                <IncomeExpenseChart/>
                <CashFlwoSummary/>
            </div>
        </div>
    );
}