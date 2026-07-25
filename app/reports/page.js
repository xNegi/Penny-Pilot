import ReportHeader from "@/components/reports/ReportHeader";
import CashFlow from "@/components/cards/CashFlowCard";
import SpendingChart from "@/components/charts/SpendingChart";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import CashFlwoSummary from "@/components/dashbaord/CashFlowSummary";
import AIInsightsPanel from "@/components/reports/AiAssistant";
import PennyPilotCard from "@/components/cards/PennyPilotCard";

export default function Page() {
  return (
    <div className="flex items-stretch gap-4 px-8 py-4">
      {/* Left */}
      <div className="w-3/5 flex flex-col gap-4">
        <ReportHeader />
        <CashFlow />
        <SpendingChart />

        <div className="flex gap-4">
          <div className="flex-1">
            <IncomeExpenseChart />
          </div>

          <div className="flex-1">
            <CashFlwoSummary/>
          </div>
        </div>
        <PennyPilotCard/>
      </div>

      {/* Right */}
      <div className="flex w-2/5">
        <AIInsightsPanel />
      </div>
    </div>
  );
}
