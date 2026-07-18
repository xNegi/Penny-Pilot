import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BorrowedList() {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faArrowUp}
            className="bg-red-200 text-red-700 rounded-4xl p-2 "
          />
          <p className="font-bold">Borrowed from</p>
        </div>
        <button className="font-medium text-violet-700">View All</button>
      </div>

      {/* borrow from list */}
      <div className="mt-4 border border-gray-200 rounded-2xl p-4">
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold">
                R
              </div>

              <div>
                <p className="font-semibold">Rohit Sharma</p>
                <p className="text-sm text-gray-500">Borrowed on 10 Jul 2025</p>
              </div>
            </div>

            <p className="font-semibold text-red-600">-$10</p>
          </li>

          <li className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold">
                V
              </div>

              <div>
                <p className="font-semibold">Virat Kohli</p>
                <p className="text-sm text-gray-500">Borrowed on 02 May 2026</p>
              </div>
            </div>

            <p className="font-semibold text-red-600">-$50</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
