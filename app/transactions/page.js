import TransactionHeader from "@/components/transaction/TransactionHeader";
import CashFlowSummary from "@/components/cards/CashFlowCard";
import TransactionHistory from "@/components/transaction/TransactionHistory";
import SpendingChart from "@/components/charts/SpendingChart";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import MoneyTracker from "@/components/transaction/MoneyTracker";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 my-2 mx-4">
            <TransactionHeader/>
            <CashFlowSummary/>
            <div className="flex gap-4">
                <TransactionHistory/>
                <MoneyTracker/>
            </div>
            <div className="flex gap-4">
                <SpendingChart/>
                <IncomeExpenseChart/>
            </div>
        </div>
    );
}