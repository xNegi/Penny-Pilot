"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHouse,
  faCreditCard,
  faChartPie,
  faBullseye,
  faWallet,
  faList,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  }
  
  return (
    <aside className="hidden md:flex w-56 self-stretch shrink-0 flex-col border-r-2 gap-4 border-gray-200  ">
      <div className="flex items-center justify-center gap-2 h-16 px-3 py-3 ">
        <span onClick={handleClick} className="text-xl font-bold text-violet-700 hover:cursor-pointer whitespace-nowrap">
          Penny Pilot <FontAwesomeIcon icon={faPaperPlane} />
        </span>
      </div>

      {/* menu items of sidebar */}

      <nav className="flex-1 text-gray-500 px-3 pl-5">
        <ul className=" flex flex-col gap-2 font-medium w-full">
          <li>
            <Link
              href="/dashboard"
              className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === "/dashboard"
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}
            >
              <FontAwesomeIcon icon={faHouse} className="w-4 shrink-0" />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/transactions"
              className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === "/transactions"
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}
            >
              <FontAwesomeIcon icon={faCreditCard} className="w-4 shrink-0" />
              Transactions
            </Link>
          </li>

          <li>
            <Link
              href="/budgets"
              className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === "/budgets"
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}
            >
              <FontAwesomeIcon icon={faChartPie} className="w-4 shrink-0" />
              Budgets
            </Link>
          </li>

          <li>
            <Link
              href="/goals"
              className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === "/goals"
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}
            >
              <FontAwesomeIcon icon={faBullseye} className="w-4 shrink-0" />
              Goals
            </Link>
          </li>

          <li>
            <Link
              href="/reports"
              className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === "/reports"
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}
            >
              <FontAwesomeIcon icon={faChartPie} className="w-4 shrink-0" />
              Reports
            </Link>
          </li>

          <li>
            <Link
              href="/accounts"
              className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === "/accounts"
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}
            >
              <FontAwesomeIcon icon={faWallet} className="w-4 shrink-0" />
              Accounts
            </Link>
          </li>

          <li>
            <Link
              href="/categories"
              className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === "/categories"
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}
            >
              <FontAwesomeIcon icon={faList} className="w-4 shrink-0" />
              Categories
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === "/settings"
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}
            >
              <FontAwesomeIcon icon={faGear} className="w-4 shrink-0" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
