import DashboardHeader from "@/components/dashbaord/DashboardHeader";
import BalanceCard from "@/components/dashbaord/BalanceCard";
import CashFlowSummary from "@/components/dashbaord/CashFlowSummary";
import IncomeExpenseChart from "@/components/dashbaord/IncomeExpenseChart";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 my-4 mx-8">
            <DashboardHeader/>
            <BalanceCard/>
            <CashFlowSummary/>
            <IncomeExpenseChart/>
        </div>
    );
}