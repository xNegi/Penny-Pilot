import BorrowedList from "./BorrowedList";
import LentList from "./LentList";

export default function MoneyTracker() {
  return (
    <div className="flex flex-col w-[35%] gap-4 h-selfstretch rounded-3xl bg-white p-4 border-2 border-gray-200 shadow-sm">

      {/* Borrowed From */}
      <div>
        <BorrowedList/>
      </div>

      {/* Lent To */}
      <div>
        <LentList/>
      </div>

    </div>
  );
}