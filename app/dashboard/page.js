import DashboardHeader from "@/components/dashbaord/DashboardHeader";
import BalanceCard from "@/components/dashbaord/BalanceCard";
import CashFlowSummary from "@/components/dashbaord/CashFlowSummary";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import SpendingChart from "@/components/charts/SpendingChart"; 
import SavingsGoals from "@/components/dashbaord/SavingsGoals";
import RecentTransactions from "@/components/dashbaord/RecentTransactions";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 my-4 mx-8">
            <DashboardHeader/>
            <BalanceCard/>
            <CashFlowSummary/>
            <div className="flex gap-6">
                <SpendingChart/>
                <SavingsGoals/>
                <RecentTransactions/>
            </div>
            <IncomeExpenseChart/>
        </div>
    );
}