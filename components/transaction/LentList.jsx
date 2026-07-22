import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function LentList(){
    return(
 <div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="bg-green-200 text-green-700 rounded-4xl p-2 "
          />
          <p className="font-bold">Lent To</p>
        </div>
        <button className="font-medium text-violet-700">View All</button>
      </div>

      {/* Lent to list */}
      <div className="mt-4 border border-gray-300 rounded-2xl p-4">
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                C
              </div>

              <div>
                <p className="font-semibold">Cristiano Ronaldo</p>
                <p className="text-sm text-gray-500">Pending</p>
              </div>
            </div>

            <p className="font-semibold text-green-600">+$10</p>
          </li>

          <li className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                M
              </div>

              <div>
                <p className="font-semibold">Lioenl Messi</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>

            <p className="font-semibold text-green-600">+$50</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
